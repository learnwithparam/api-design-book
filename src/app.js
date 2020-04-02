// import express package
const express = require('express');
// Import middlewares
const helmet = require('helmet');
const cors = require('cors');

// Initialize express app
const app = express();

app.use(helmet());
// CORS middleware - Allow all origin
app.use(cors());

// Sample tweet data stored in an array
const tweets = [
  {
    id: '1111',
    text: 'first tweet'
  },
  {
    id: '1112',
    text: 'second tweet'
  },
  {
    id: '1113',
    text: 'third tweet'
  }
];

// GET endpoint to get all tweets
app.get('/get-all', (req, res) => {
  // Sending the data as JSON
  return res.json({
    data: tweets
  });
});

// GET endpoint to get a tweet by ID
app.get('/get', (req, res) => {
  // Read the ID value from query string
  const id = req.query.id;

  // Check whether ID is passed, else send a error message
  if (!id) {
    return res.json({
      error: 'ID query string is mandatory!'
    });
  }

  // Get the tweet from array based on ID value
  const filteredTweet = tweets.filter((tweet) => {
    return tweet.id === id;
  });

  // If there is no matched tweet, then send a error response
  if (filteredTweet.length === 0) {
    return res.json({
      error: 'No matched tweet!'
    });
  }

  // If there is a matched tweet, send it as response
  return res.json({
    data: filteredTweet[0] // Send the matched tweet object
  });
});

// GET endpoint to get a tweet by ID
app.get('/get/:id', (req, res) => {
  // Read the ID value from URL params
  const id = req.params.id;

  // Get the tweet from array based on ID value
  const filteredTweet = tweets.filter((tweet) => {
    return tweet.id === id;
  });

  // If there is no matched tweet, then send a error response
  if (filteredTweet.length === 0) {
    return res.json({
      error: 'No matched tweet!'
    });
  }

  // If there is a matched tweet, send it as response
  return res.json({
    data: filteredTweet[0] // Send the matched tweet object
  });
});

// Export express app as Module
module.exports = app;
