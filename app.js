
// index.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3015;
app.use(express.static('public'));
// Set up a route for the homepage
app.get('/', (req, res) => {
    // Read the contents of index.html
    const indexPath = path.join(__dirname, 'index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    // Send the HTML content as the response
    res.send(htmlContent);
});

app.get('/about', (req, res) => {
    // Read the contents of index.html
    const indexPath = path.join(__dirname, '/html/about.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    // Send the HTML content as the response
    res.send(htmlContent);
});

app.get('/contact', (req, res) => {
    // Read the contents of index.html
    const indexPath = path.join(__dirname, '/html/contact.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    // Send the HTML content as the response
    res.send(htmlContent);
});

app.get('/privacy', (req, res) => {
    // Read the contents of index.html
    const indexPath = path.join(__dirname, '/html/privacy.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    // Send the HTML content as the response
    res.send(htmlContent);
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
