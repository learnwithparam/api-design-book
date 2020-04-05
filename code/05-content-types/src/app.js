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

// Update a tweet
app.put('/put/:id', (req, res) => {
  // Read tweet data from the request body
  const tweet = req.body;

  // Get the ID from URL params
  const id = req.params.id;

  // Validate the tweet data
  if (!tweet.text) {
    return res.json({ error: 'tweet text is mandatory' });
  }

  // Find the tweet index based on `id` value in the tweets array
  const tweetIndex = tweets.findIndex((tweet) => {
    return tweet.id === id;
  });

  // Check whether tweet index is valid
  if (tweetIndex === -1) {
    return res.json({ error: `tweet with id (${id}) not found` });
  }

  // Update the tweet using tweetIndex
  tweets[tweetIndex].text = tweet.text;

  // Send the updated tweet as response
  res.json({
    data: tweets[tweetIndex]
  });
});

// Delete a tweet
app.delete('/delete/:id', (req, res) => {
  // Get the ID from URL params
  const id = req.params.id;

  // Find the tweet index based on `id` value in the tweets array
  const tweetIndex = tweets.findIndex((tweet) => {
    return tweet.id === id;
  });

  // Check whether tweet index is valid
  if (tweetIndex === -1) {
    return res.json({ error: `tweet with id (${id}) not found` });
  }

  // Delete the tweet using tweetIndex
  tweets.splice(tweetIndex, 1);

  // Send the updated tweet as response
  res.json({
    message: `tweet with id (${id}) removed successfully`
  });
});

// Read Request Header
app.get('/request-header', (req, res) => {
  const requestTime = req.headers['request-time'];

  res.json({
    data: `Request time through the request header (${requestTime})`
  });
});

// Set Response Header
app.get('/response-header', (req, res) => {
  const responseTime = new Date();

  // Set the `response-time` in http header
  res.setHeader('response-time', responseTime);

  res.json({
    data: `Request time through the request header (${responseTime})`
  });
});

// Text as Response
app.get('/text', (req, res) => {
  res.send('Text as Response');
});

// Custom content type
app.get('/custom-text', (req, res) => {
  res.setHeader('Content-Type', 'text/xml'); // content type will be set as `text/xml`
  res.send('Text as Response');
});

// Send JSON data using res.send
app.get('/send-json', (req, res) => {
  res.send({ json: 'sending as JSON using res.send' });
});

// HTML as response
app.get('/html', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html>
      <body>
        <h1>Hello Param</h1>
        <p>Mr. Josh, How are you?</p>
      </body>
    </html>`);
});

// XML as response
app.get('/xml', (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
    <note>
      <to>Tove</to>
      <from>Jani</from>
      <heading>Reminder</heading>
      <body>Don't forget me this weekend!</body>
    </note>`);
});

// Export express app as Module
module.exports = app;
