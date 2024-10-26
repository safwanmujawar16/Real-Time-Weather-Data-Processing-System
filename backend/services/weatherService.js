const axios = require('axios');
const config = require('../config/config');

const getWeather = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`);
    const data = response.data;
    return {
        city: city,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        main: data.weather[0].main,
        dt: data.dt,
    };
};

module.exports = {
    getWeather,
};
