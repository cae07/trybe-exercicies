const express = require('express');

const { userCreate, userById, userIdToUpdate } = require('./Controllers/user.controler');
const { findAll, createNewUser } = require('./Models/users');
const errorMiddleware = require('./Middleware/errorMiddleware');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app
  .route('/user')
  .get(async (req, res) => {
    const response = await findAll();
    res.status(200).json(response);
  })
  .post(async (req, res, next) => {
    userCreate(req, res, next);
  });

app
  .route('/user/:id')
  .get( async (req, res, next) => {
    userById(req, res, next);
  })
  .put( async (req, res, next) => {
    userIdToUpdate(req, res, next);
  });

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`ONLINE`));
