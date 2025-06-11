const express = require("express");
const path = require("path");
const app = express();
let port = 3000;
app.set("view engine", "ejs");

// app.set("views", path.join(__dirname, "views")); 

// app.get("/", (req, res) => {
//     res.render("home.ejs"); 
// });

// app.get("/hello", (req, res) => {
//     res.send("namaste");
// });

// app.get("/rolldice",(req,res)=>{
//     diceVal =   Math.floor(Math.random() * 6 ) + 1;
//     res.render("rolldice.ejs", {num : diceVal});
// });
 app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const Data = instaData[username];
    console.log(Data);
    if(Data)
    res.render("instagram.ejs",{Data});
    else{
        res.render("err.ejs");
    }
});

app.listen(port, () => {
    console.log(`The app is listening on port ${port}`);
});