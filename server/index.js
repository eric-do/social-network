const express = require('express')
const app = express()
const path = require('path');
const models = require('./database');
const bodyParser = require('body-parser');
const port = 3000
require('dotenv').config();

const tweetRoutes = require('./routes/tweet');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

app.use('/api/tweet', tweetRoutes);
app.use('/api/user', userRoutes);

const server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = server;