const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env');
});
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded())

app.get('/:productId', (req, res) => {
  const package = path.join(__dirname, '../public/lib/index.html')
  res.sendFile(package);
})

var port = process.env.PORT_PROXY;

app.listen(port, () => {
  console.log(`Server Live listening on port ${port}`);
})