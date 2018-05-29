var express = require("express"),
    app     = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//root route
app.get("/", function(req, res){
  res.render("index");
});

//404 route
app.get("*", function(req, res){
  res.send("Sorry, page not found...");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("The Server has started");
});

slkdfjg
