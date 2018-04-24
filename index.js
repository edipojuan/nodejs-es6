import express from 'express';

const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('Hello Express with ES6');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
