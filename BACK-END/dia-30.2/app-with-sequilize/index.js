const express = require('express')

const userController = require('./controller/useController');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/user', userController);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));