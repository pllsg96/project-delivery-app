const express = require('express');

const app = express();
const cors = require('cors');
const loginRoutes = require('../routes/login.routes');
const registerRoutes = require('../routes/register.routes');
const productsRoutes = require('../routes/product.routes');
const salesRouter = require('../routes/sales.routes');

app.use(express.json());
app.use(cors());
app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/', (_req, res) => {
  res.send('Its Working');
});

app.use('/login', loginRoutes);

app.use('/register', registerRoutes);

app.use('/products', productsRoutes);

app.use('/', salesRouter);

module.exports = app;
