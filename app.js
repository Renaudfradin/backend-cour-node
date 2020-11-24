const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const stuffRoute = require('./routes/stuff.js')


mongoose.connect('mongodb+srv://Renaud:Tigrette179236502017@cluster0.yiuvc.mongodb.net/projecttest?retryWrites=true&w=majority',
{useNewUrlParser: true,useUnifiedTopology: true})
 .then(()=>console.log('connexion reussie'))
 .catch(()=>console.log('connexion echoue'));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})


app.use(bodyParser.json());

app.use('/api/stuff',stuffRoute);

module.exports = app;