const express = require('express');
const app = express();


//Accessing the .env file 
require("dotenv").config();
const port = process.env.PORT || 4000 ; 

//by using this we can use req.body to get the elements of the input text
app.use(express.json());


//Accessing routes
const blogRoutes = require("./routes/blogs");

//using this the api url is like localhost then the api/v1 then the blogroutes
app.use("api/v1", blogRoutes);


//starting server
app.listen(port, ()=>{
    console.log(`server Startted at ${port}`)
})

//connection to the database
const dbConnect = require("./config/database")
dbConnect();

//default route 
app.get("/", (req,res)=>{
    res.send(`<h1>This is Home page</h1>`);
})