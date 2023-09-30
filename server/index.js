//External Moduls
// const express = require("express")
// const dotenv = require("dotenv")
// const mongoose = require("mongoose")
// const path=require("path")
// const cookieParser = require("cookie-parser")
// const cors = require("cors")
 
import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from 'cors'
import mongoose from "mongoose";

import tourRoute from './router/tourRoute.js'

import userRoute from './router/userRoute.js'

import authRoute from './router/authRoute.js'

import reviewRoute from "./router/reviewRoute.js";

import bookingRoute from "./router/bookingRoute.js";

const app = express()

dotenv.config() 

//cors options

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
   methods:["GET"]
}


//Mongoose Connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() =>console.log("Database Connected Successfully!!"))
    .catch(err => console.log(err))
    
// Request parser
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set view engine


// set static folder

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

//Set Routes
app.use("/", (req,res) => {
     res.send("hello")
 })
app.use("/api/v1/tours", tourRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/review", reviewRoute)
app.use("/api/v1/booking", bookingRoute)

// app.use("/login",loginRouter)



//Error Handler (404 Not Found)
// app.use(notFoundHandler)

// // Common Error Handler

// app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})
