const axios = require('axios');
const express = require('express');
const ejs = require('ejs');

const app = express();
const PORT = 3000;

// Fetch data from the Philips Hue API
async function fetchDataFromHue() {
    try {
        const response = await axios.get(process.env.HUE_API_URL);
        return response.data; // Assuming the response is JSON
    } catch (error) {
        console.error('Error fetching data from Hue API:', error);
        return null;
    }
}

// Route to render the HTML page
app.get('/', async (req, res) => {
    const hueData = await fetchDataFromHue();
    // Render HTML using EJS template
    ejs.renderFile('template.ejs', { hueData }, (err, html) => {
        if (err) {
            console.error('Error rendering template:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(html);
        }
    });
});

// Start the server to listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
