const bodyParser = require('body-parser')
const express= require('express')
const app= express()
const mongoose=require('mongoose')
require("./Employee")


const Employee=mongoose.model("employee")

const MongoUrl="mongodb+srv://cnq:JnPq2BZY24FoYpOx@cluster0.yfshsx8.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(MongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongoDB")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})

app.get('/',(req,res)=>{
    res.send("welcome to Node js ")
})

app.listen(3000,()=>{
    console.log("server running")
})