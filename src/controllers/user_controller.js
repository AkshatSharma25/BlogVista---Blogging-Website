const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/user_model");

const userController = {
  createUser: async (req, res, next) => {
    console.log("got create user request");
    try {
      const userData = req.body;
      const newUser = new userModel(userData );
      await newUser.save();
      console.log("create account request")
      res.send(newUser);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  signIn:async(req,res,next)=>{
    try{
      console.log("signIn request")
        const query=req.body;
        const found=await userModel.findOne({email:query["email"]});
        if(found){
            if(found["password"]==query["password"]){
                console.log("success");
                res.status(200).send({"message":"success",user:{
                  "email":found.email,
                  "username":found.username,
                  "aboutMe":found.aboutMe,
                  "totalBlogs":found.totalBlogs
                }});             
            
            }
            else{
                console.log("failed");
                console.log("password did not match")
                next();
            }
        }
        else{
          console.log("email not found");
          res.status(404).send("email not found");
        }
    }
    catch(error){
        console.log(error);
        next();
    }
  },
};

module.exports = userController;
