/* eslint-disable import/no-unresolved */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('express-async-errors');

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
app.get('/html', (req, res) => res.status(200).send('<h1>Retornando uma Menssagem HTML</h1>'));
app.get('/redirect', (req, res) => res
  .status(200).redirect('https://www.linkedin.com/in/tonistorres/'));
app.get('/end', (req, res) => res.status(200).end());

app.use((req, res) => res.sendStatus(404));

app.use((error, req, res, next) => {
  console.error(error.stack);
  next(error);
});

app.use((error, _req, res, _next) => res.status(500)
  .json({ message: 'Algo deu errado! Mensagem: Error Internal Server' }));

module.exports = app;
