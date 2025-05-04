const express = require('express'); 
const path = require('path');
// commonjs
// import express from 'express'; // es modules
const app = express(); // app express
const port = 8080; //port

//config template engine
app.set('views', path.join(__dirname,'views'));
app.set('views engine', 'ejs')

// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.send('Hello World! roy hung')
})

app.get('/royhung', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})