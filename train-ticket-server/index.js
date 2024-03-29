const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();
app.get('/', (req, res) => {
  res.json({ result: 1 });
});

apiMocker(app, path.resolve('./mocker/mocker.js'));
app.listen(6688, () => {
  console.log(`mock server is running on port 6688`);
});
