const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8002;

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
