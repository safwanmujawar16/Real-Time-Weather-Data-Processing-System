const express = require('express');
const bodyParser = require('body-parser');
const weatherRoutes = require('./backend/routes/weatherRoutes');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use('/api/weather', weatherRoutes);
app.use(express.static('./frontend')); // Serve frontend files

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
