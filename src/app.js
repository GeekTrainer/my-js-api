const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;