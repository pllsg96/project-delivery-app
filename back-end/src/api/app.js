const express = require('express');
const loginRouter = require('./routes/login.routes');

const app = express();
app.use(express.json());

app.use('/login', loginRouter);

module.exports = app;
