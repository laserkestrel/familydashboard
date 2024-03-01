const axios = require('axios');
const express = require('express');
const ejs = require('ejs');

const app = express();
const PORT = 443;

// Fetch data from the Philips Hue API
async function fetchDataFromHue() {
    try {
        const response = await axios.get(process.env.HUE_API_URL);
        return response.data; // Assuming the response is JSON
    } catch (error) {
        console.error('Error fetching data from Hue API:', error);
        throw error; // Rethrow the error to be caught by the error handling middleware
    }
}

// Route to render the HTML page
app.get('/', async (req, res, next) => {
    try {
        const hueData = await fetchDataFromHue();

        // Log the hueData object to the console
        console.log('Hue Data:', hueData);

        // Render HTML using EJS template
        ejs.renderFile('template.ejs', { hueData }, (err, html) => {
            if (err) {
                console.error('Error rendering template:', err);
                return next(err); // Pass the error to the error handling middleware
            } else {
                res.send(html);
            }
        });
    } catch (error) {
        return next(error); // Pass the error to the error handling middleware
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Internal Server Error:', err); // Log the error for debugging purposes
    res.status(500).send('Internal Server Error: ' + err.message);
});

// Start the server to listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});