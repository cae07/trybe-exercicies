const { findById, updateUserById } = require('../Models/users');

const findUser = async (id) => {
  const userById = await findById(id);

  if(!userById) return {
    "error": true,
    "message": "Usuário não encontrado"
};

  return userById;
};

const updateById = async (id, body) => {
  const { firstName, lastName, email, password } = body;
  if (!firstName || !lastName || !email || !password) {
    return {
      "error": true,
      "message": "Todos os campos precisam ser preenchidos."
    };
  }
  if (password < 6) return {
    "error": true,
    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  }
  const response = await updateUserById(id, body);
  return response;
};

module.exports = {
  findUser,
  updateById,
};
