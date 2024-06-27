const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const multer=require("multer");
const morgan=require("morgan");
const path=require("path")
const uploadRoute=require("./multer/upload_router")
const frontend_router=require("./routers/frontend_router");
const userRouter=require("./routers/userRouter");
require('dotenv').config();

const PORT=process.env.PORT;
const dbLink=process.env.dbLink;
const connectedToDB=mongoose.connect(dbLink);
if(connectedToDB) console.log("conneted to db");
else console.log("error connectng to db");
const app=express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(frontend_router);
app.use('/api/user',userRouter);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public/')));
app.set('views', path.join(__dirname, '../public/'));


app.listen(PORT,()=>{
    console.log(`server running at port: ${PORT}`);
})