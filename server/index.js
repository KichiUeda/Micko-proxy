const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send('TEMPLATE OF SERVICE')
})

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Live listening on port ${port}`);
})