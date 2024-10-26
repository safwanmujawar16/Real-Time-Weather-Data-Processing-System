<h1>🌦️ Real-Time Weather Monitoring System</h1>

<p>A real-time weather monitoring system that fetches, processes, and visualizes weather data from OpenWeatherMap API for multiple Indian cities. This system allows users to view the current weather, daily summaries, and receive alerts if the temperature exceeds a predefined threshold.</p>

<h2>📂 Project Structure</h2>
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

<h2>💻 Tech Stack</h2>
<p>This project is built using the following technologies:</p>
<ul>
  <li><img src="https://img.icons8.com/color/48/000000/html-5.png" width="20" /> <strong>HTML</strong></li>
  <li><img src="https://img.icons8.com/color/48/000000/css3.png" width="20" /> <strong>CSS</strong></li>
  <li><img src="https://img.icons8.com/color/48/000000/javascript.png" width="20" /> <strong>JavaScript</strong></li>
  <li><img src="https://img.icons8.com/color/48/000000/nodejs.png" width="20" /> <strong>Node.js</strong></li>
  <li><img src="https://img.icons8.com/color/48/000000/json.png" width="20" /> <strong>JSON (Data Storage)</strong></li>
  <li><img src="https://img.icons8.com/color/48/000000/api.png" width="20" /> <strong>OpenWeatherMap API</strong></li>
  <li><img src="https://img.icons8.com/color/48/000000/data-visualization.png" width="20" /> <strong>Chart.js</strong></li>
</ul>

<h2>📦 Dependencies</h2>
<ul>
  <li><strong>axios</strong>: For making HTTP requests to the OpenWeatherMap API</li>
  <li><strong>express</strong>: Backend server framework</li>
  <li><strong>dotenv</strong>: For managing environment variables</li>
  <li><strong>fs</strong>: To read and write data to JSON file</li>
  <li><strong>chart.js</strong>: For displaying weather data charts on the frontend</li>
</ul>

<h2>⚙️ Setup and Installation</h2>
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

<h2>🚀 Execution Steps</h2>
<ol>
  <li><strong>Start the Backend Server</strong>: Run the server using <code>npm start</code> inside the <code>backend</code> folder. The server should start on port 3001.</li>
  <li><strong>Open Frontend in Browser</strong>: Open <code>index.html</code> in a browser to access the user interface.</li>
  <li><strong>View Data</strong>: Weather data for each city will load automatically and display in table format with a chart visualization.</li>
</ol>

<h2>👀 Output Running Steps</h2>
<ol>
  <li>On opening the frontend, the weather data for each city will load and display automatically in a table format.</li>
  <li>A bar chart will visualize the temperatures across the selected cities.</li>
  <li>When the temperature exceeds the alert threshold, a pop-up alert will notify the user in real time.</li>
</ol>

<h2>🌟 Features</h2>
<ul>
  <li><strong>Real-time Data Fetching</strong>: Retrieves weather data from OpenWeatherMap API for six cities in India.</li>
  <li><strong>Daily Summaries</strong>: Calculates and stores daily summaries including average, maximum, and minimum temperature along with the dominant weather condition.</li>
  <li><strong>Alerts</strong>: Displays a pop-up alert when the temperature exceeds a user-defined threshold.</li>
  <li><strong>Visualization</strong>: Uses Chart.js to visualize temperature data on a bar chart.</li>
</ul>

<h2>📄 Example Code</h2>
<p>Here’s a brief example of the code used to fetch and display weather data:</p>

<pre>
// script.js
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

<h2>🖼️ Screenshots</h2>
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

<h2>📜 License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
