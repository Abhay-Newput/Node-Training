const express = require('express')
const PORT = 8000;
const  sendMail = require('./controller/sendMail');

const app = express()

app.use(express.json());


app.get("/", (req,res) => {
    console.log("I am Server");
    res.send("I am Server")
});

app.get('/sendMail', sendMail);


app.listen(PORT, ()=> console.log("Server started at PORT: ",PORT));