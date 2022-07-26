const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send('You sent GET request to /');
});

app.post('/', (req, res) => {
  res.send('You sent POST request to /');
});

app.get('/api-kiddies', (req, res) => {
  res.send(JSON.stringify({what: "My api", why: "because I can", examples: "https://github.com/rbeverly/api-kiddies", favoritethings: ["raindrops", "roses", "whiskers", "kittens"]}));
});

app.post('/api-kiddies', (req, res) => {
  res.send(JSON.stringify({what: "My api", why: "because I can", examples: "https://github.com/rbeverly/api-kiddies", favoritethings: ["raindrops", "roses", "whiskers", "kittens", "flag{posting-to-apis}"]}));
});

app.listen(5100, () => {
  console.log("Running on port 5100.");
});

module.exports = app;