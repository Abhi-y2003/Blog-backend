const express = require('express');

const router = express.Router();


//importing Controller 
const {createBlog} = require("../controller/createBlog");
const {createComment} = require("../controller/comment");



//define URL
router.post("/createBlog", createBlog);
router.post("comments/create", createComment);


module.exports = router;