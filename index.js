const express = require('express');
const port = 8000;
const app = express();
const mongodb = require('./config/mongo');




//middleware for passing data
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/', require('./routes'));


mongodb.dbconnect.then(() => app.listen(port, () => {
    console.log("Server is running!")
}))
