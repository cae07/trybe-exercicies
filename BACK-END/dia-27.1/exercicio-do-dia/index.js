const express = require('express');

const { validateExistsAllFields, validatePassword } = require('./Service/validate.users');
const { findAll, createNewUser } = require('./Models/users');
const { findUser, updateById } = require('./Service/FindUsers');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`ONLINE`))

app
  .route('/user')
  .get(async (req, res) => {
  try {
    const response = await findAll();

    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "internal Error" });    
  }
  })
  .post(async (req, res) => {
    const { firstName, lastName, email, password} = req.body;
    
    const fields = validateExistsAllFields(firstName, lastName, email, password);
    const validPassword = validatePassword(password);

    if (fields.status) {
      return res.status(fields.status).json(fields.message);
    }
    if (validPassword.status) {
      return res.status(validPassword.status).json(validPassword.message);
    }

    const response = await createNewUser(firstName, lastName, email, password);

    return res.status(201).json(response)
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
