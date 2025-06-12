const express = require("express");
const QueryString = require("qs");
const app = express();
const port = 8080;
app.listen(port,()=>{
    console.log(`server is litening on port ${port}`);
});
app.get("/register",(req,res)=>{
    let {user, passoword} = req.query;
    console.log(user, passoword)
    res.send(`GET Standard Response by ${user}`);
});
app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("POST Standard Response");
});