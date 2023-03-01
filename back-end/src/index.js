const express = require('express');

const app = express();
const cors = require('cors');
const loginRoutes = require('./routes/login.routes');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Its Working');
});

app.use('/login', loginRoutes);

module.exports = app;