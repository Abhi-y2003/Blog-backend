const Blog = require("../model/post")

exports.createBlog = async(req,res) =>{
    try{
        const{title, commentBox}  = req.body;

        const response = await Blog.create({title,commentBox})

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"

            }
        )

    }

    catch(error){
        console.error(error.message);
        res.status(500)
        .json({
            success:false,
            message:error.message,
        })

    }
}