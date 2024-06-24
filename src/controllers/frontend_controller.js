const express = require("express");
const ejs = require("ejs");
const userModel=require("../models/user_model")
const userRouter = require("../routers/userRouter");
const fontend_controller = {
  getHomePage: (req, res, next) => {
    console.log("Home page request");
    res.render("html/index");
    console.log("served successfully");
  },
  getSignInPage: (req, res, next) => {
    console.log("SignIn Page request");
    res.render("html/signIn");
    console.log("served successfully");
  },
  getRegisterPage: (req, res, next) => {
    console.log("Register Page request");
    res.render("html/register");
    console.log("served successfully");
  },
  getProfilePage:async (req, res, next) => {
    try {
      console.log("profile page request");
      const username= req.params.username;
      console.log(req.params.username);
      const foundUser=await userModel.findOne({username:username});
      if(foundUser){
        res.render("html/profile",{username:username});
      }
      console.log(foundUser);
      res.send("hello world")
      next();
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = fontend_controller;
