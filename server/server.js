const express = require("express");
const app = express();
const path = require('path');
const PORT = 3000;
//import mongoose
const mongo = require('mongoose')
//create connection to mongoose database by passing connect link from mongoDB
//takes two arguments, link and cb function
mongo.connect('mongodb+srv://NewUser01:NewUser01@clustersolo.wlsquee.mongodb.net/?retryWrites=true&w=majority', (err)=>{
  if(err) return console.log('Error happened', err);
  console.log('Database connected');
})
//import model from Schema folder
const model = require('./Schemas/userSchema')


//Create a route handler that statically serves all html
app.get('/', (req,res)=> {
  return res.status(200).sendFile(path.resolve('./index.html'))
} )

//this route testing the ability to create a new model in our schema
app.get('/testing', (req,res) =>{
  model.create({userName:'test', message: ['hello', 'world']}, (err, data)=>{
   if (err) return res.status(400).json({err: 'hello'})
   
    return res.status(200).json(data.message)
  })
  
})


app.use('/api', (req, res) => {
  res.status(200).json({hello: 'world'})
})




//create a catch all error handling route
app.use( (req, res) =>{
  return res.status(304).sendFile(path.join(__dirname,'../index.html'));
})

// app.use((err,req,res,next)=> {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 400,
//     message: { err: 'An error occured'}
//   };
//   const errObj = Object.assign({}, defaultErr, err);
//   return res.status(errObj.status).json(errObj.message);
// });

app.listen(PORT, ()=>{
  console.log(`Server listening on port: ${PORT}`);
})