const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'macarrão a bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app
  .route('/recipes')
  .get(function (req, res, next) {
    res.json(recipes);
  });

app.listen(3001, () => console.log('aplicação ouvindo na porta 3001'));
