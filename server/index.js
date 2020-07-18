const express = require('express')
const app = express()
const path = require('path');
const port = 3000
// const db = require('../database');
const tweetRoutes = require('./routes/tweets');

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use('/tweets', tweetRoutes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = app;