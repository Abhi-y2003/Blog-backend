const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLenght:50
        },
        commentBox:{
            type:String,
            required:true,
            maxLenght:50
        },
        isFavorited:{
            type:Boolean,
            default:false,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)

module.exports = mongoose.model("blog", blogSchema);