require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');  
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;

const aspirant = require('./routes/aspirant');  
const test = require('./routes/test');
const testCheck = require('./routes/testCheck');
const app = express();

// mongoose connection
mongoose.connect(process.env.DB_URL,{  
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routes related to aspirant side queries  
app.use('/aspirant',aspirant);


// routes related to access tests and quizes 
app.use('/test',test);

app.use('/testCheck',testCheck);

app.listen(PORT,()=>console.log(`SERVER LISTENING AT ${PORT}`));