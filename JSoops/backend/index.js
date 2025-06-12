const express = require("express");
const QueryString = require("qs");
const app = express();
const port = 8080;
app.use(express.urlencoded({extended : true}));//for parsing data , so node
app.use(express.json());// understand different types of data 
app.listen(port,()=>{
    console.log(`server is litening on port ${port}`);
});
app.get("/register",(req,res)=>{
    let {user, password} = req.query;
    console.log(user, passoword)
    res.send(`GET Standard Response by ${user}`);
});
app.post("/register",(req,res)=>{
    let {user, password} = req.body;
    //  console.log(req.body);
    res.send(`POST Standard Response by ${user}`);
});
