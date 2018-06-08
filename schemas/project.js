var mongoose = require("mongoose");

//SCHEMA SETUP
var projectSchema = new mongoose.Schema({
  title: String,
  startDate: Date,
  requestDate: {type: Date, default: Date.now},
  notes: String,
  status: String
  // author: {
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User"
  //   },
  //   username: String
  // }
});

module.exports = mongoose.model("Project", projectSchema);
