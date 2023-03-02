const express = require('express');

const app = express();
const cors = require('cors');
const loginRoutes = require('./routes/login.routes');
const registerRoutes = require('./routes/register.routes');

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Its Working');
});

app.use('/login', loginRoutes);

app.use('/register', registerRoutes);

module.exports = app;