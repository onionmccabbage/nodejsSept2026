import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  // NB express takes care of closing the response stream for us
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});