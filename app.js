const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
global.__basedir = __dirname;
const ejs = require('ejs');
require('./config/db');
const listEndpoints = require('express-list-endpoints');
const passport = require('passport');

let cookieParser = require('cookie-parser');
let logger = require('morgan');

const { adminPassportStrategy } = require('./config/adminPassportStrategy');
const { devicePassportStrategy } = require('./config/devicePassportStrategy');
const app = express();
const corsOptions = { origin: process.env.ALLOW_ORIGIN, };
app.use(cors(corsOptions));

//template engine
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.use(require('./utils/responseHandler'));

//all routes 
const routes =  require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

adminPassportStrategy(passport);
devicePassportStrategy(passport);

let currentFile = __filename;

if (process.argv[1] == currentFile || process.argv[1] == currentFile.slice(0, -3) ) {

  const seeder = require('./seeders');
  const allRegisterRoutes = listEndpoints(app);
  seeder(allRegisterRoutes);
  app.listen(process.env.PORT,()=>{
    console.log(`your application is running on ${process.env.PORT}`);
  });
} else {
  module.exports = app;
}
