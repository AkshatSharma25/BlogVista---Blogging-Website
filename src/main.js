const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const multer=require("multer");
require('dotenv').config();

const PORT=process.env.PORT;
const app=express();
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/',(req,res,next)=>{
    res.render("../public/index.ejs");
});

app.listen(PORT,()=>{
    console.log(`server running at port: ${PORT}`);
})