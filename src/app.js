const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Ruta base
app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Node API Architecture running'
  });
});
const routes = require('./routes');
app.use('/api', routes);


module.exports = app;
