const express = require('express');
const app = express()
require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const mongoose = require('mongoose');
const cors = require('cors')
const uri = process.env.URI
const port = process.env.PORT
app.use(cors())
app.use(express.json())


mongoose.connect(uri)
.then   (()=>{
    console.log(`mongodb connected`);
})
.catch((err)=>{
    console.log(err);
})

// Routes
app.use('/api', require('./routes/items'));

app.listen(3500, ()=>{
    console.log('Server is running');
    
} )