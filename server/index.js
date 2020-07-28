const express = require('express')
const app = express()
const path = require('path');
const models = require('./database');
const bodyParser = require('body-parser');
const port = 3000
const tweetRoutes = require('./routes/tweets');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

app.use('/tweets', tweetRoutes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = app;