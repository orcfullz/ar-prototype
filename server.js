const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Set port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
