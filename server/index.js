require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');  
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;
var expressValidator=require('express-validator');
var expressSession=require('express-session');


const aspirant = require('./routes/aspirant');  
const test = require('./routes/test');
const testCheck = require('./routes/testCheck');
const company =require('./routes/company');
const app = express();

// mongoose connection
mongoose.connect(process.env.DB_URL,{  
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());
app.use(expressSession({secret:'max',saveUninitialized: false, resave : false}));

// routes related to aspirant side queries  
app.use('/aspirant',aspirant);
app.use('/company',company);



// routes related to access tests and quizes 
app.use('/test',test);

app.use('/testCheck',testCheck);

app.listen(PORT,()=>console.log(`SERVER LISTENING AT ${PORT}`));