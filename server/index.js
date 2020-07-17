const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded())

app.get('/:productId', (req, res) => {
  const package = path.join(__dirname, '../public/lib/index.html')
  res.sendFile(package);
})

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Live listening on port ${port}`);
})