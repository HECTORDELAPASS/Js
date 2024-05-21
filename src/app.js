const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require ('mysql');
const myconnection = require ('express-myconnection');



const app = express();

//import
const  customerRoutes = require ('./routes/customer');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  port: 3306,
  database: 'ventasautos'
},'single'));


//routes
app.use('/',customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));
