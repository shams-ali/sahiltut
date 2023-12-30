const express = require('express');
const app = express();
require('dotenv').config();

const { PORT = 3000 } = process.env

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT);
