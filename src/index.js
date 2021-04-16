const express = require('express');
const env = require('dotenv');

const { R2Router, R1Router } = require('./routes');

env.config();
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use('/R2', R2Router);
app.use('/R1', R1Router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
