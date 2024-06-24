const express=require("express");
const frontend_controller=require("../controllers/frontend_controller");
const fontend_controller = require("../controllers/frontend_controller");
const frontend_router=express.Router();

frontend_router.get('/',frontend_controller.getHomePage);
frontend_router.get('/signin',fontend_controller.getSignInPage);
frontend_router.get('/register',frontend_controller.getRegisterPage);
frontend_router.get('/profile/:username',frontend_controller.getProfilePage);
module.exports=frontend_router;