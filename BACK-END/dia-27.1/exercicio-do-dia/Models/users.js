const connection = require('./Connection');
const { ObjectId } = require('mongodb');

const findAll = async () => {
  try {
    const db = await connection();
    const response = await db.collection('usuarios').find({}).toArray();
    
    return response;
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "internal Error" });
  }
};

const createNewUser = async (firstName, lastName, email, password) => {
  try {
    const db = await connection();
    const response = await db.collection('usuarios').insertOne({
      firstName, lastName, email, password,
    });
  
    const id = ObjectId(response.insertedId);
    const newUser = {
      id, firstName, lastName, email,
    };
  
    return newUser;    
  } catch (error) {
    console.error(error.message);
    return ({ message: "internal Error" });      
  }
};

const findById = async (id) => {
  const convertedId = ObjectId(id);
  try {
    const db = await connection();
    const response = await db.collection('usuarios').findOne({ _id: convertedId });

    return response;
  } catch (error) {
    console.error(error.message);
    return ({ message: "internal Error" });      
  }
};

const updateUserById = async (id, body) => {
  const convertedId = ObjectId(id);
  const { firstName, lastName, email, password } = body;
  try {
    const db = await connection();
    const response = await db.collection('usuarios').updateOne(
      { _id: convertedId },
      {
        $set: {
          firstName,
          lastName,
          email,
          password,
        }
      }
    );

    return response;
  } catch (error) {    
    console.error(error.message);
    return ({ message: "internal Error" });    
  }
}

module.exports = {
  findAll,
  createNewUser,
  findById,
  updateUserById,
};
