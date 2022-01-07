const express = require('express');

const { userCreate } = require('./Controllers/user.controler');
const { findAll, createNewUser } = require('./Models/users');
const { findUser, updateById } = require('./Service/FindUsers');
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
  .get( async (req, res) => {
    const { id } = req.params;
    const response = await findUser(id);

    return res.status(200).json(response);
  })
  .put( async (req, res) => {
    const { id } = req.params;
    const newUserData = req.body;

    await updateById(id, newUserData);
    const { firstName, lastName, email } = newUserData;

    const newUser = { id, firstName, lastName, email };
    return res.status(200).json(newUser);
  })

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`ONLINE`));
