const path = require('path');
const express = require('express');

const configViewEngine = (app)=> {
    // console.log(">>> check __dirname: ", path.join('./src','views'));
    app.set('views', path.join('./src','views'));
    app.set('views engine', 'ejs');

    //config static files: image/css/js
    app.use(express.static(path.join('./src','public')));

}

module.exports = configViewEngine;