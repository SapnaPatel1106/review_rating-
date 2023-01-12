const express =require ('express')

const bodyparser=require('body-parser')
const {application} = require("express");
const app =express();
const port=9000;

const mongoose = require("mongoose");
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//const { response } = require('express');

mongoose.set("strictQuery",false);
mongoose.connect("mongodb://127.0.0.1:27017/demodb",{
    useNewUrlParser:"true",
});
mongoose.connection.on("error",(err)=>{
    console.log("mongoose connection Error",err)
});
mongoose.connection.on("connected",(err,res)=>{
    console.log("mongoose is connected.",err)
});

app.get("/",function(req,res){
    return res.send({msg : "Welcome to nodejs development"})
})

app.get("/detail",function(req,res){
    res.send({msg : "Hello World"})
})

app.post("/signup",function(req,res){
    console.log(req,res)
    const{name,email}=req.body
    res.send({msg: "API created by post method"})
})

app.put("/put",function(req,res){
    res.send({msg: "API created by put method"})
})

app.patch("/patch",function(req,res){
    res.send({msg: "API created by patch method"})
})

app.delete("/delete",function(req,res){
    res.send({msg: "API created by delete method"})
})


app.listen(port,()=>{
    console.log(`server is running on port no :${port}`);
})