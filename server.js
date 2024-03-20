import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from './Routes/router.js'
const app=express();
app.use(cors())
app.use(bodyParser.json())

app.listen(5000 , ()=> {
    console.log("Server is Started...");
})

app.use("api/",route)