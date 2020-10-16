require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;
var expressValidator=require('express-validator');
var expressSession=require('express-session');


const aspirant = require('./routes/aspirant');
const company =require('./routes/company');
const app = express();

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());
app.use(expressSession({secret:'max',saveUninitialized: false, resave : false}));


app.use('/aspirant',aspirant);
app.use('/company',company);










app.listen(PORT,()=>console.log(`SERVER LISTENING AT ${PORT}`));