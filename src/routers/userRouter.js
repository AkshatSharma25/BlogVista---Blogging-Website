const express=require("express");
const userRouter=express.Router();
const userController=require("../controllers/user_controller");
userRouter.post('/createuser',userController.createUser);
userRouter.post('/signin',userController.signIn);
module.exports=userRouter;