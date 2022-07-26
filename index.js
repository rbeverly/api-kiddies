const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send('You sent GET request to /');
});

app.post('/', (req, res) => {
  res.send('You sent POST request to /');
});

app.get('/api-kiddies', (req, res) => {
  res.send(JSON.stringify({what: "My api", why: "because I can", more-examples: "https://github.com/rbeverly/api-kiddies", favorite-things: ["raindrops", "roses", "whiskers", "kittens"]}));
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;