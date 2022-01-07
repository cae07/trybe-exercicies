const { validateExistsAllFields, validatePassword } = require('../Service/validate.users');
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

module.exports = {
  userCreate,
};
