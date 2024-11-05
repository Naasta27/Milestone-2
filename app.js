// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an Express application
const app = express();

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route for processing form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body; // Get form data from the request
    console.log('Form data received:', formData); // Log the data to the console
    // Process the data here as needed (e.g., save to database)
    
    res.json({ success: true, message: 'Form submission received!' }); // Send a response back to the client
});

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on a specified port
const PORT = 3000; // You can change this port if needed
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
