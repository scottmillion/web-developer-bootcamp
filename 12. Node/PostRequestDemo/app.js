var express = require('express');
var app = express();
var bodyParser = require("body-parser"); // to use body-parser

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.set("view engine", "ejs");

var friends = [
  'Tommy',
  'Sally',
  'Frank',
  'Jenny'
]

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/friends", function (req, res) {

  res.render("friends", { friends: friends });
});

app.post("/addfriend", function (req, res) {
  // req.body is an object that contains all of the data from the request body
  var newFriend = req.body.newfriend; // req.body doesn't work until you install npm body-parser. Need body-parser to extract form data on the server side from html forms.
  friends.push(newFriend);

  res.redirect("/friends"); // redirects us back to same page where the friends are.
})


app.listen(3000, function (req, res) {
  console.log("server is live at 3000");
});