const express = require('express');

const router = express.Router();


//importing Controller 
const {createBlog} = require("../controller/createBlog");
const {favBlog}  = require("../controller/favBlog");
const {unFavBlog}  = require("../controller/unFavBlog")


//define URL
router.post("/createBlog", createBlog);
router.put("/favBlog/:id", favBlog);
router.put("/unFavBlog/:id", unFavBlog);


module.exports = router;