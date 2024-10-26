async function fetchdata() {
    const threshold = localStorage.getItem('alertThreshold') || 28; // Default to 28 if not set
    const response = await fetch('/api/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ threshold }), // Send threshold to backend
    });

    const weatherData = await response.json();
    console.log(weatherData);
    displayWeatherData(weatherData);
    createChart(weatherData);
    showalert(weatherData, threshold); // Pass the threshold to showalert function
    localStorage.removeItem('alertThreshold');
}

document.getElementById('setThreshold').addEventListener('click', () => {
    const thresholdInputValue = document.getElementById('thresholdInput').value;

    if (thresholdInputValue) {
        localStorage.setItem('alertThreshold', thresholdInputValue); // Store the threshold value in localStorage
        alert(`Threshold set to ${thresholdInputValue}°C`);
        window.location.reload(); // Reload the page to apply new threshold and fetch data
        
    } else {
        alert('Please enter a valid threshold value');
    }
});

function showalert(data, threshold) {
    const citiesWithAlert = []; // Array to store cities exceeding the threshold

    data.forEach(item => {
        // Check if the temperature exceeds the threshold
        if (item.temp > threshold) {
            citiesWithAlert.push(`${item.city}: ${item.temp}°C`); // Add city and temp to the list
        }
    });

    if (citiesWithAlert.length > 0) {
        // Show a single alert with all cities and their temperatures
        alert(`Alert: Temperature exceeded ${threshold}°C in the following cities:\n\n${citiesWithAlert.join('\n')}`);
    }
}
const displayWeatherData = (data) => {
    const weatherDiv = document.getElementById('weatherData');
    weatherDiv.innerHTML = '';
    data.forEach(item => {
        weatherDiv.innerHTML += ` 
        <table class="weather-table">
            <thead>
                <tr>
                    <th colspan="2">${item.city}</th>
                </tr>
            </thead>
            <tbody class="table">
                <tr><td>Temperature:</td><td>${item.temp} °C</td></tr>
                <tr><td>Feels Like:</td><td>${item.feels_like} °C</td></tr>
                <tr><td>Date:</td><td>${new Date(item.dt * 1000).toLocaleString()}</td></tr>
                <tr><td>Main Condition:</td><td>${item.main}</td></tr>
            </tbody>
        </table>`;
    });
};

const createChart = (weatherData) => {
    const ctx = document.getElementById('weatherChart').getContext('2d');
    const labels = weatherData.map(item => item.city);
    const temps = weatherData.map(item => item.temp);

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temps,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Temperature (°C)'
                    }
                }
            }
        }
    });
};

window.onload = fetchdata;