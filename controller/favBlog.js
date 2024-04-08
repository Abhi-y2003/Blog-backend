const Blog = require("../model/blog");

exports.favBlog  = async(req,res) =>{

    try {
        
    const {id}  =req.params;
    const {isFavorited} = req.body;

    const update = await Blog.findByIdAndUpdate(
        id,
        {isFavorited:true, updateAt: Date.now()},
    )

    res.status(200)
    .json({
        success:true,
        data:update,
        message:"Liked successfully"
    });
    

    } catch (error) {
        console.error(error.message)
        res.status(500)
        .json({
            success:false,
            message:"Error in liking the blog"
        })
    }
}