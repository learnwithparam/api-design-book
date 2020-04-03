// import express package
const express = require('express');
// Import middlewares
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

app.use(helmet());
// CORS middleware - Allow all origin
app.use(cors());

// Body parser to parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// Body parser to parse JSON body content
app.use(bodyParser.json());

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

// Post a new tweet
app.post('/post', (req, res) => {
  // Read tweet data from the request body
  const tweet = req.body;

  // Validate the tweet data
  if (!tweet.text) {
    return res.json({ error: 'tweet text is mandatory' });
  }

  // Generate a 4 digit random ID number
  const id = `${Math.floor(1000 + Math.random() * 9000)}`;

  // Update tweets array with new tweet
  const newTweet = { ...tweet, id };
  tweets.push(newTweet);

  // Send the new tweet as response
  res.json({
    data: newTweet
  });
});

// Export express app as Module
module.exports = app;
