// Index.js is the entry pnt of the application
// as defined in the package.json
// Install and import express package
const express= require('express');
// 2) Create an app object 
const app = express();

// 3) Define routes for the app object 
// TODO: define routes
//Get /route
app.get("/",(req,res) => {
    res.send("<h1>Hello World!<h1>");
})

//Get /route
app.get("/",(req,res) => {
    res.send("<h1>Hello World!<h1>");
})

// Start the server by calling listen()method on the app object
app.listen(3000, ()=> {
    console.log("Server is running on http://localhost:3000")
})