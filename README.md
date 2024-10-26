<h1>Real-Time Weather Monitoring System</h1>

<p>A real-time weather monitoring system that fetches, processes, and visualizes weather data from OpenWeatherMap API for multiple Indian cities. This system allows users to view the current weather, daily summaries, and receive alerts if the temperature exceeds a predefined threshold.</p>

<h2>Project Structure</h2>
<pre>
weather-monitoring-system/
├── backend/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   └── weatherController.js
│   ├── routes/
│   │   └── weatherRoutes.js
│   ├── services/
│   │   └── weatherService.js
│   ├── data/
│   │   └── weatherData.json
│   ├── package.json
│   └── server.js
└── frontend/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── chart.min.js
</pre>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend</strong>: HTML, CSS, JavaScript, Chart.js</li>
  <li><strong>Backend</strong>: Node.js, Express.js</li>
  <li><strong>Database</strong>: JSON file (for persistent storage of daily summaries)</li>
  <li><strong>API</strong>: OpenWeatherMap API for weather data</li>
</ul>

<h2>Dependencies</h2>
<ul>
  <li><strong>axios</strong>: For making HTTP requests to the OpenWeatherMap API</li>
  <li><strong>express</strong>: Backend server framework</li>
  <li><strong>dotenv</strong>: For managing environment variables</li>
  <li><strong>fs</strong>: To read and write data to JSON file</li>
  <li><strong>chart.js</strong>: For displaying weather data charts on the frontend</li>
</ul>

<h2>Setup and Installation</h2>
<ol>
  <li><strong>Clone the repository</strong>:
    <pre>
      git clone https://github.com/your-username/weather-monitoring-system.git
      cd weather-monitoring-system
    </pre>
  </li>

  <li><strong>Backend Setup</strong>:
    <ul>
      <li>Navigate to the backend directory.
        <pre>cd backend</pre>
      </li>
      <li>Install dependencies.
        <pre>npm install</pre>
      </li>
      <li>Set up environment variables:
        <ul>
          <li>Create a <code>.env</code> file in the <code>backend</code> folder.</li>
          <li>Add your OpenWeatherMap API key to the <code>.env</code> file.
            <pre>OPENWEATHER_API_KEY=your_api_key_here</pre>
          </li>
        </ul>
      </li>
      <li>Start the server.
        <pre>npm start</pre>
      </li>
    </ul>
  </li>

  <li><strong>Frontend Setup</strong>:
    <ul>
      <li>Open <code>index.html</code> in your browser to view the application interface.</li>
    </ul>
  </li>
</ol>

<h2>Execution Steps</h2>
<ol>
  <li><strong>Start the Backend Server</strong>: Run the server using <code>npm start</code> inside the <code>backend</code> folder. The server should start on port 3001.</li>
  <li><strong>Open Frontend in Browser</strong>: Open <code>index.html</code> in a browser to access the user interface.</li>
  <li><strong>Fetch Data</strong>: Click the <strong>Fetch Weather Data</strong> button to retrieve weather data and view visualizations.</li>
</ol>

<h2>Output Running Steps</h2>
<ol>
  <li>Click on the <strong>Fetch Weather Data</strong> button in the browser.</li>
  <li>The current weather data for each city will be displayed in a table format on the interface.</li>
  <li>A bar chart will be generated showing the temperatures across the selected cities.</li>
  <li>When temperature exceeds the alert threshold, a pop-up alert will be shown.</li>
</ol>

<h2>Features</h2>
<ul>
  <li><strong>Real-time Data Fetching</strong>: Retrieves weather data from OpenWeatherMap API for six cities in India.</li>
  <li><strong>Daily Summaries</strong>: Calculates and stores daily summaries including average, maximum, and minimum temperature along with the dominant weather condition.</li>
  <li><strong>Alerts</strong>: Displays a pop-up alert when the temperature exceeds a user-defined threshold.</li>
  <li><strong>Visualization</strong>: Uses Chart.js to visualize temperature data on a bar chart.</li>
</ul>

<h2>Code Highlights</h2>
<ul>
  <li><strong>Backend</strong>:
    <ul>
      <li><code>weatherService.js</code>: Fetches data from OpenWeatherMap API.</li>
      <li><code>weatherController.js</code>: Processes and stores weather data, calculates daily summaries.</li>
      <li><code>config.js</code>: Stores configuration settings, including API URLs and intervals.</li>
    </ul>
  </li>
  <li><strong>Frontend</strong>:
    <ul>
      <li><code>script.js</code>: Manages data display and alert thresholds, updates the chart.</li>
      <li><code>styles.css</code>: Contains the style for data tables and chart.</li>
    </ul>
  </li>
</ul>

<h2>Example Code</h2>
<p>Here’s a brief example of the code used to fetch and display weather data:</p>

<pre>
// script.js
document.getElementById('fetchWeather').addEventListener('click', async () => {
    const response = await fetch('/api/weather');
    const weatherData = await response.json();
    displayWeatherData(weatherData);
    createChart(weatherData);
});

const displayWeatherData = (data) => {
    const weatherDiv = document.getElementById('weatherData');
    data.forEach(item => {
        weatherDiv.innerHTML += `
        &lt;table class="weather-table"&gt;
            &lt;tr&gt;&lt;th&gt;${item.city}:&lt;/th&gt;&lt;/tr&gt;
            &lt;tr&gt;&lt;td&gt;${item.temp}&lt;/td&gt;&lt;/tr&gt;
        &lt;/table&gt;`;
    });
};
</pre>

<h2>Screenshots</h2>
<table>
  <tr>
    <th>Weather Data Display</th>
    <th>Chart Visualization</th>
  </tr>
  <tr>
    <td><img src="screenshots/weather_table.png" alt="Weather Table"></td>
    <td><img src="screenshots/weather_chart.png" alt="Weather Chart"></td>
  </tr>
</table>

<h2>Future Improvements</h2>
<ul>
  <li>Add more weather parameters (e.g., humidity, wind speed).</li>
  <li>Implement historical weather trend analysis.</li>
  <li>Extend alerts to include email notifications.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
