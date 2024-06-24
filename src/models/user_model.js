const {Schema,model}=require("mongoose");

const userSchema=Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    city:String,
    blogtype:String,
    phoneNumber:String,
    email:{type:String,required:true},
    totalBlogs:{type:Number,default:0},
    profileImage:String
});

const userModel=model('userModel',userSchema);
module.exports=userModel;