// backend/config/config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    API_URL: 'https://api.openweathermap.org/data/2.5/weather',
};
