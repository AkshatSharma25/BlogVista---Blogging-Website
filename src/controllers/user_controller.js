const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/user_model");

const userController = {
  createUser: async (req, res, next) => {
    try {
      const userData = req.body;
      const newUser = new userModel(userData );
      await newUser.save();
      res.send(newUser);
    } catch (error) {
      console.log(error);
      next();
    }
  },
  signIn:async(req,res,next)=>{
    try{
        const query=req.body;
        const found=await userModel.findOne({email:query["email"]});
        if(found){
            if(found["password"]==query["password"]){
                console.log("success");
                res.status(200).send({"message":"success",user:{
                  "email":found.email,
                  "username":found.username,
                }});
                // console.log(found);
                // res.render("../public/html/index.ejs");
                
            
            }
            else{
                console.log("failed");
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
