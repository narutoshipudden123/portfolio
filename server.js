const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React/Vite app build directory
app.use(express.static(path.join(__dirname, 'portfolio/dist')));

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio/dist/index.html'));
});

// Handle all other routes by serving the index.html (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio/dist/index.html'));
});

// Get port from environment variable or use 10000 as fallback
const port = process.env.PORT || 10000;

// Listen on all network interfaces (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Server is listening on all network interfaces`);
}); 