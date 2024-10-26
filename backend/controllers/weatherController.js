const weatherService = require('../services/weatherService');
const fs = require('fs');
const path = require('path');


const dataFilePath = path.join(__dirname, '../data/weatherData.json');
// const tempThreshold = threshold || 28; // Define temperature threshold

const readWeatherData = () => {
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, JSON.stringify({ summaries: [] }));
    }
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
};

const writeWeatherData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

exports.fetchWeatherData = async (req, res) => {
    const { threshold } = req.body; // Get threshold from request body
    const tempThreshold =  parseFloat(threshold) || 28; // Use default threshold of 28 if not provided
    console.log('Received threshold from frontend:', tempThreshold); // Debugging line
    
    const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
    const weatherData = await Promise.all(cities.map(city => weatherService.getWeather(city)));
    
    const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    // Calculate daily summary
    const dailySummary = {
        date: date,
        avgTemp: (weatherData.reduce((sum, item) => sum + item.temp, 0) / weatherData.length).toFixed(2),
        maxTemp: Math.max(...weatherData.map(item => item.temp)),
        minTemp: Math.min(...weatherData.map(item => item.temp)),
        dominantCondition: weatherData.map(item => item.main).reduce((a, b) =>
            a[b] = (a[b] || 0) + 1 && a || a[b] > 1 ? a : b
        )
    };
    // // Call alert function for each city's weather data
    // weatherData.forEach(({ city, temp }) => alertTemperatureThreshold(city, temp));
    weatherData.forEach(({ city, temp }) => {
        if (temp > tempThreshold) {
            console.log(`Alert: Temperature in ${city} has exceeded ${tempThreshold}°C!`);
        }
    });

    this.saveDailySummary(dailySummary);
    res.json(weatherData);
};

exports.saveDailySummary = (summary) => {
    const weatherData = readWeatherData();
    const existingSummary = weatherData.summaries.find(item => item.date === summary.date);
    
    if (existingSummary) {
        Object.assign(existingSummary, summary);
    } else {
        weatherData.summaries.push(summary);
    }

    writeWeatherData(weatherData);
};
