var express = require("express");
var app = express();

app.use("/data", express.static(__dirname + '/data'));
app.use("/data", express.static(__dirname + '/node_modules'));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.listen(1234);
