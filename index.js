const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config();
// const dotenv = require("dotenv");
// dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());

const router = require('./routes/index');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database connected Successfully');
  })
  .catch((err) => {
    console.log('Some error while connecting to database', err);
  });

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
  return res.status(404).send('Error 404, Route not found');
});
