const express = require('express');

const router = express.Router();


//importing Controller 
const {createBlog} = require("../controller/createBlog");


//define URL
router.post("/createBlog", createBlog);


module.exports = router;