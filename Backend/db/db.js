import mongoose from 'mongoose'
import express from 'express'
const app=express()
const connnectDb=async()=>{
    try {
       const connection=await mongoose.connect(process.env.MONGO_URI);
       app.on("error",(error)=>{
        console.log("Errr",error)
        throw error
       })
        console.log("db connected successfully")
    } catch (error) {
        console.log("error",error)
    }
}
export default connnectDb;






















// import mongoose from 'mongoose'
// const connectDb=async()=>{
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("db connected successfully")
//     } catch (error) {
//         console.log("error while connecting db",error)
//     }
// }
// export default connectDb;