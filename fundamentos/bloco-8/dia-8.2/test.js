// const { employees } = require("../../../projetos-trybe/sd-013-a-project-zoo-functions/src/data");

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// letters.forEach((letter) => console.log(`A letra ${letter} faz parte do seu alfabeto`));

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const employees = [
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: [burlId, olaId],
  },
  {
    id: burlId,
    firstName: 'Burl',
    lastName: 'Bethea',
    managers: [stephanieId],
  },
  {
    id: olaId,
    firstName: 'Ola',
    lastName: 'Orloff',
    managers: [stephanieId],  
  },
  {
    id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
    firstName: 'Wilburn',
    lastName: 'Wishart',
    managers: [burlId, olaId],
  },
  {
    id: stephanieId,
    firstName: 'Stephanie',
    lastName: 'Strauss',
    managers: [],
  },
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    firstName: 'Sharonda',
    lastName: 'Spry',
    managers: [burlId, olaId],
  },
  {
    id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
    firstName: 'Ardith',
    lastName: 'Azevado',
    managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
  },
  {
    id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
    firstName: 'Emery',
    lastName: 'Elser',
    managers: [stephanieId],
  },
]



const test = employees.some((a) => a.managers == '9e7d4524-363c-416a-8759-8aa7e50c0992')

console.log(test)