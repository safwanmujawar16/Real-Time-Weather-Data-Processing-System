<h1>🌦️ Real-Time Weather Monitoring System</h1>

<p>A real-time weather monitoring system that fetches, processes, and visualizes weather data from OpenWeatherMap API for multiple Indian cities. This system allows users to view the current weather, daily summaries, and receive alerts if the temperature exceeds a predefined threshold.</p>

<h2>💻 Tech Stack</h2>
<p>This project is built using the following technologies:</p>

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,js,html,css)](https://skillicons.dev)

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
</ol>

<h2>🚀 Execution Steps</h2>
<ol>
  <li><strong>Start the Backend Server</strong>: Run the server using <code>npm start</code> inside the <code>backend</code> folder. The server should start on port 3001.</li>
  <li><strong>View Data</strong>: Weather data for each city will load automatically and display in table format with a chart visualization.</li>
</ol>

<h2>🌟 Features</h2>
<ul>
  <li><strong>Visualization</strong>: Uses Chart.js to visualize temperature data on a bar chart.</li>

  ![Screenshot 2024-10-26 153126](https://github.com/user-attachments/assets/6610f539-2f88-4193-8caa-4ca414eac4c0)
   
     
  <li><strong>Real-time Data Fetching</strong>: Retrieves weather data from OpenWeatherMap API for six cities in India.</li>
    
  ![Screenshot 2024-10-26 153058](https://github.com/user-attachments/assets/f610666d-6bda-40f8-bb5a-d0cda7f4213d)
 
  <li><strong>Daily Summaries</strong>: Calculates and stores daily summaries including average, maximum, and minimum temperature along with the dominant weather condition.</li>

 ```
backend/data/weatherData.json
{
  "summaries": [
    {
      "date": "2024-10-26",
      "avgTemp": "32.07",
      "maxTemp": 34.99,
      "minTemp": 27.18,
      "dominantCondition": "Haze"
    }
    ]
   }
```
  
  <li><strong>Alerts</strong>: Displays a pop-up alert when the temperature exceeds a user-defined threshold.</li>

![Screenshot 2024-10-26 155617](https://github.com/user-attachments/assets/30eee711-b0ab-456e-8cb2-34a204e1fc10)
   
</ul>
