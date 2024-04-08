const Comment = require("../model/comment");
const Post = require("../model/post");

exports.createComment  = async(req,res) =>{

    try {
        const {post, user, body} = req.body;


        //creating a new object
        const comment = new Comment({
            post, user, body
        })

        //saaving the new comment into the database
        const saveComment = await comment.save()

        //find the post by ID and update the new comment init
        const updatePost = await Post.findByIdAndUpdate(
            post, 
            {$push :{comments: saveComment._id}}, 
            {new:true}
        )

        res.json({
            post:updatePost,
        })

    } catch (error) {
        console.error(error.message)
        res.status(500)
        .json({
            success:false,
            message:"Error in commenting in the blog"
        })
    }
}