const {Schema,model}=require("mongoose");

const blogShema=Schema({
    author:{type:Schema.Types.ObjectId,ref:'userModel'},
    title:String,
    block1:String,
    img1:{type:String,default:"N/A"},
    block2:String,
    img2:{type:String,default:"N/A"},
    block3:String,
    img3:{type:String,default:"N/A"}
});

const blogModel=model("blogModel",blogShema);
module.exports=blogModel;