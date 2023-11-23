
// index.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3015;

// Set up a route for the homepage
app.get('/', (req, res) => {
  // Read the contents of index.html
  const indexPath = path.join(__dirname, 'index.html');
  const htmlContent = fs.readFileSync(indexPath, 'utf-8');
  
  // Send the HTML content as the response
  res.send(htmlContent);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
