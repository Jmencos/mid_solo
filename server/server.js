const express = require("express");
const app = express();
const path = require('path');
const PORT = 3000;

//Create a route handler that statically serves all html
app.get('/', (req,res)=> {
  return res.status(200).sendFile(path.resolve('./index.html'))
} )

app.get('/testing', (req,res) =>{
  return res.status(200).send('<h1>You found the testing site</h1>')
})


app.use('/api', (req, res) => {
  res.status(200).json({hello: 'world'})
})




//create a catch all error handling route
app.use( (req, res) =>{
  return res.status(304).sendFile('../index.html');
})

app.use((err,req,res,next)=> {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured'}
  };
  const errObj = Object.assign({}, defaultErr, err);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, ()=>{
  console.log(`Server listening on port: ${PORT}`);
})