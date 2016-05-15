var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
/*
 we have defined the Router middle layer, which will be executed 
 before any other routes. This route will be used to print the 
 type of HTTP request the particular Route is referring to.
 
 Once the middle layer is defined, you must pass "next()" so that 
 next router will get executed.
*/
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
