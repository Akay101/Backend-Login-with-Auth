// const express = require('express')
import express from 'express'
import userRoutes from './userRoutes/userRoutes.js';
const app = express();
import mongoDB  from './db/dbConnect.js'
import userModel from './db/model.js';
mongoDB()
app.use(express.json())
import log from 'morgan'

app.use(log('dev'))
const port = process.env.PORT || 5000

app.use('/', userRoutes)

// app.get("/get", (req,res)=>{
//     res.send("Hello from the Get");
// })
// app.post("/get", (req,res)=>{
//     res.send("Hello from the Post");
// })



app.listen(port, ()=>{
    console.log(`server is live at ${port}`);
})