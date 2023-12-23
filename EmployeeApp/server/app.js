const bodyParser = require('body-parser')
const express= require('express')
const app= express()
const mongoose=require('mongoose')
require("./Employee")


app.use(bodyParser.json())
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
    Employee.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})


// app.post('/send', async (req, res) => {
//     const employee = new Employee(req.body)
//     await employee.save().then(() => console.log(employee))
//     res.send('Posted')
// })
 
//post data from app to mongodb
app.post('/send-data', async (req, res) => {
    try {
      const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
      });
  
      const savedEmployee = await employee.save();
      console.log('Employee saved:', savedEmployee);
  
      res.status(201).send(data);
    } catch (error) {
      console.error('Error saving employee:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  //delete data from app to mongodb 
  app.post('/delete',(req,res)=>{
    Employee.findByIdAndDelete(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
  })
  

  // update existing data from app to mongodb 
  app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body.id,{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
  })


app.listen(3000,()=>{
    console.log("server running")
})