const { findById, updateUserById } = require('../Models/users');

const findUser = async (id) => {
  const userById = await findById(id);

  if(!userById) throw {
    "status": 400,
    "message": "Usuário não encontrado"
};

  return userById;
};

const updateById = async (id, body) => {
  const { firstName, lastName, email, password } = body;
  if (!firstName || !lastName || !email || !password) {
    throw {
      "status": 400,
      "message": "Todos os campos precisam ser preenchidos."
    };
  }
  if (password < 6) throw {
    "status": 400,
    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  }
  await updateUserById(id, body);
};

module.exports = {
  findUser,
  updateById,
};
