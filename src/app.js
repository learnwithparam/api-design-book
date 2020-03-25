// import express package
const express = require('express');

// Initialize express app
const app = express();

//  Middleware to Log request time
app.use((req, res, next) => {
  console.log('Requested date time --> ', new Date().toISOString());
  next();
});

// Return Hello World on root URL (i.e., '/')
app.get('/', (req, res) => {
  const name = 'Afrin';
  return res.send(`Hello ${name}, How are you doing today?`);
});

// Export express app as Module
module.exports = app;
