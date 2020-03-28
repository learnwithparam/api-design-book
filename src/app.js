// import express package
const express = require('express');
// Import middlewares
const helmet = require('helmet');

// Initialize express app
const app = express();

app.use(helmet());

//  Middleware to Log request time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// A simple delay function
const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

// Return request time from the middleware
app.get('/request-time', async (req, res) => {
  // Call a 3 second delay between response
  await delay(3000);

  res.send({
    requestTime: req.requestTime,
    responseTime: new Date().toISOString()
  });
});

// Return Hello World on root URL (i.e., '/')
app.get('/', (req, res) => {
  const name = 'Afrin';
  return res.send(`Hello ${name}, How are you doing today?`);
});

// Export express app as Module
module.exports = app;
