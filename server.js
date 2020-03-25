// import node Js HTTP package
const http = require('http');
// import dotenv package
const dotenv = require('dotenv');

// Use `.env` config when the NODE_ENV is other than production
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// import app module from src/app.js
const app = require('./src/app');

// Read port from PORT env variable or use 6060
const port = process.env.PORT || 6060;
// Create a HTTP server and using the express app
const server = http.Server(app);

console.log({
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  api_root_url: process.env.API_BASE_URL,
  port_lowercase: process.env.port // Will be undefined
});

// Listen to the server at port 6060
server.listen(port, () => {
  console.log(`Server listening on port: ${port}\n`);
});
