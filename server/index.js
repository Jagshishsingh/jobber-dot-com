require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;

const aspirant = require('./routes/aspirant');
const test = require('./routes/test');
const app = express();

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/aspirant',aspirant);

app.use('/test',test);







app.listen(PORT,()=>console.log(`SERVER LISTENING AT ${PORT}`));