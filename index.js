const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connect"))
.catch(err=>console.log(err))

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/user',userRoutes);


app.listen(process.env.PORT,()=>{
    console.log("server started");
})
