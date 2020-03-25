// import express package
const express = require('express');

// Initialize express app
const app = express();

// Return Hello World on root URL (i.e., '/')
app.get('/', (req, res) => {
  const name = 'Afrin';
  res.send(`Hello ${name}, How are you doing today?`);
});

// Export express app as Module
module.exports = app;
