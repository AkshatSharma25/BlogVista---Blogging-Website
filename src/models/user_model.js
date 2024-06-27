const {Schema,model}=require("mongoose");

const userSchema=Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    city:String,
    blogtype:String,
    phoneNumber:String,
    email:{type:String,required:true},
    totalBlogs:{type:Number,default:0},
    aboutMe:{type:String,default:"Hey there!I've always been passionate and this blog is where I channel that enthusiasm into meaningful content that I hope inspires and informs you."},
    bloglinks:[],
    profileImage:String
});

const userModel=model('userModel',userSchema);
module.exports=userModel;