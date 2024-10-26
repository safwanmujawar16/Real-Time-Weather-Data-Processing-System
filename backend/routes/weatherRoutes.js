const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.post('/', weatherController.fetchWeatherData);

module.exports = router;
