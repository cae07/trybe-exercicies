const { validateExistsAllFields, validatePassword } = require('../Service/validate.users');
const { findUser, updateById } = require('../Service/FindUsers');
const { createNewUser } = require('../Models/users');



const userCreate = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password} = req.body;    
    const fields = validateExistsAllFields(firstName, lastName, email, password);
    const validPassword = validatePassword(password);

    if (fields.status) throw(fields.status, fields.message);
    if (validPassword.status) throw(validPassword.status, validPassword.message);

    const response = await createNewUser(firstName, lastName, email, password);
    return res.status(201).json(response)
  } catch (error) {
    return next(error);
  }
};

const userById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await findUser(id);

    return res.status(200).json(response); 
  } catch (error) {
    return next(error);
  }
}

const userIdToUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUserData = req.body;

    await updateById(id, newUserData);
    
    const { firstName, lastName, email } = newUserData;
    const newUser = { id, firstName, lastName, email };

    return res.status(200).json(newUser);    
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  userCreate,
  userById,
  userIdToUpdate,
};
