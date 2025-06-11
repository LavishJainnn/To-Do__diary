const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var items = [];

app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.render("view", {arr: items, req: req});
});

app.post("/", function(req,res){
    var item = req.body.element;
    if(item !== ""){
        items.push(item);
    }
    else {
        return res.redirect("/?error=empty");
    }
    res.redirect("/");
});

app.post("/delete", function(req,res){
    var index = req.body.delete;
    items.splice(index,1);
    res.redirect("/");
});

app.listen(27,function(){
    console.log("Server Started.");
});