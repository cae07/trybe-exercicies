const validateExistsAllFields = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) {
    throw { status: 400, message: "Todos os campos são obrigatórios." };
  }
  return true;
};

const validatePassword = (password) => {
  if (password.length < 6) {
    throw { status: 400, message: "O password deve ter 6 ou mais caracteres."}
  }
  return true;
}

module.exports = {
  validateExistsAllFields,
  validatePassword,
};
