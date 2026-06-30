import express from 'express'
import dotenv from 'dotenv'
import connectDb from '../db/db.js'
dotenv.config()
connectDb()
const app=express()
const port=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send(`well i did it yayyyy running!!!`)
})
app.listen(port,()=>{
    console.log(`your server is working`)
})





















// import express from 'express'
// import dotenv from "dotenv"
// import connectDb from "../db/db.js";
// dotenv.config()
// connectDb()
// const app=express()
// const port=process.env.PORT
// app.get('/',(res,req)=>{
//     res.send("welcome i did it woooo")
// })
// app.listen(port,()=>{
//     console.log("port is running ")
// })