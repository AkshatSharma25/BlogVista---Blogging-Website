const mongoose=require("mongoose");
const blogModel=require("../models/blog_model");
const blogController={
    createNewBlog:async (req,res,next)=>{
        console.log("got create blog request");
        const user=req.params.user;
        
    }
}
module.exports=blogController;