const express = require('express');
const path = require('path');

// Create express app
const app = express();

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Define a route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Set up server
const port = 3001;
app.listen(port, () => console.log(`Frontend server started on port ${port}`));
