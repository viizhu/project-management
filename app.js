var express   = require("express"),
    app       = express(),
    moment    = require("moment"),
    bodyParser  = require("body-parser"),
    mongoose  = require("mongoose"),
    Project   = require("./schemas/project");

//use yelpcamp database
mongoose.connect(process.env.DATABASEURL);
   //Heroku Settings: Config Variables > KEY = DATABASEURL; VALUE = mongodb://<dbuser>:<dbpassword>@ds119489.mlab.com:19489/yelpcamp
   //This way, while on local test, it will use the local database, when on Heroku servers it will use the mlab database
//Can also run environment for Heroku through commandline:
   //heroku config:set KEY=VALUE
   //heroku config:set mongodb://<dbuser>:<dbpassword>@ds119489.mlab.com:19489/yelpcamp

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.locals.moment = moment;

//root route
app.get("/", function(req, res){
  Project.find({}, function(err, projects){
    if(err) {
      console.log(err);
    } else{
      res.render("index", {projects: projects});
    }
  });
});

//new route
app.get("/new", function(req, res){
  res.render("new")
});

//create route
app.post("/", function(req, res){
  //create project
  Project.create(req.body.projects, function(err, newProject){
    if(err){
      console.log(err);
    } else {
      console.log("sent");
      res.redirect("/");
    }
  });
});

//404 route
app.get("*", function(req, res){
  res.send("Sorry, page not found...");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("The Server has started");
});
