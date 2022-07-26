const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send(
  `
  ### Heyyy. If you're looking at this you just used an API. ####

  # Your browser, or cUrl, or wget or whatever, sent a GET request to this API. And this API sent you back this text! That's about as basic as it gets, eh? Don't worry, there's more.

  # Here are some other things you can GET (just add these 'paths' after the site name):

  /how-to-rest

  /security-stuff

  /install/wsl

  /install/gh

  /install/javascript-express

  /install/python-flask

  /install/ruby-sinatra

  /make/things

  /formats/json

  /formats/xml

  /fun/websocket

  /codez/express-server

  /codez/flask-server

  /codez/sinatra-server

  /host/vercel

  /host/heroku

  /host/aws

  /this/site/repo

  /open-api-list  (include jonscoffeepot.coffee, and make that one!)

  /get-ascii-art

  /api-key-check

  /api-talk-outline

  /osint-talk-outline

  /gimme-flagz
  `);
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

app.get('/gimme-flagz', (req, res) => {
  res.send('lol... try something else');
});

app.post('/gimme-flagz', (req, res) => {
  var key = req.get('X-API-KEY');
  if (key === 'cybercamp') {
    return res.send('ZmxhZ3twb3N0ZWQtd2l0aC1hcGkta2V5fQ==');
  };
  res.send('hmm... that did not work.');
});

// This can be almost any port, including the standard port 80 for web
// The usual port is 5000, but alas, that's also the port Apple uses for Airplay, so
// you may find you can't run the app locally on a Mac.
app.listen(31337, () => {
  console.log("Running on port 31337.");
});

module.exports = app;