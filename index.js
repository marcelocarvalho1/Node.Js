// const { Person,  } = require('./person', );
const dotenv = require("dotenv");

dotenv.config();

const connecToDataBase = require("./src/database/connect");

connecToDataBase();

// require('./modules/path')
// require('./modules/fs')
// // require('./modules/http')

// require('./modules/')

// const person = new Person('Marcelo');
