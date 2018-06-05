var express   = require("express"),
    app       = express(),
    mongoose  = require("mongoose"),
    Project  = require("./schemas/project");

//Seed data
var data = [
  {
    title: "Set up MongoDB",
    startDate: new Date(2018, 4, 15),
    requestDate: new Date(),
    notes: "Currently having trouble connecting to the database, creating a seeds file",
    status: "progress"
  },
  {
    title: "Pet Hermo",
    startDate: new Date(2016, 3, 1),
    requestDate: new Date(1989, 9, 11),
    notes: "Hermo is the cutest doggo",
    status: "progress"
  },
  {
    title: "Obtain a doggo",
    startDate: new Date(1989, 9, 11),
    requestDate: new Date(1989, 9, 11),
    notes: "Doggo is a big distraction. But worth it. Now to get second doggo so first doggo has a friend.",
    status: "complete"
  }
];

mongoose.connect(process.env.DATABASEURL);
console.log("Connected to ", process.env.DATABASEURL)


function seedDB(){
  //Remove all campgrounds
  Project.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed projects");
    // Comment.remove({}, function(err){
    //   if(err){
    //     console.log(err);
    //   }
    //   console.log("removed comments");
      //add a few campgrounds
      data.forEach(function(seed){
        Project.create(seed, function(err, project){
          if(err){
            console.log(err);
          } else {
            console.log("added a project");
            //create a comment
            // Comment.create(
            //   {
            //     text: "This place is great, but I wish there was internet",
            //     author: "Homer"
            //   }, function(err, comment){
            //     if(err){
            //       console.log(err);
            //     } else {
            //       campground.comments.push(comment); //push comment to campground
            //       campground.save(); //save comment
            //       console.log("Created new comment");
            //     }
            //   });
          }
        });
      });
    });
  }

  seedDB();

module.exports = seedDB;
