var express = require("express");
var app = express();

app.use(express.static("public")); // outside of the 'views' folder, we have to do this for any new folders where we store files to access them. We created the public folder, so we put this here instead and reference "app.css" in our ejs files instead of the path '/public/app.css'
app.set("view engine", "ejs"); // this allows us to write "home", "love", "posts" without needing to include .ejs at the end.

app.get("/", (req, res) => {
  res.render("home"); // uses an html template (dynamic html files). The way to go most of the time. ejs means "embedded javascript"
  // res.send("Welcome"); // way to just print something on html file.
});

app.get("/fallinlovewith/:thing", (req, res) => {
  var thing = req.params.thing;
  res.render("love", { thingVar: thing });
});

app.get("/posts", (req, res) => {
  var posts = [
    { title: "Post 1", author: "Suzy" },
    { title: "Can you believe this Pomsky?", author: "Frank" },
    { title: "Trump ahead of Biden in new poll.", author: "Sally" },
  ];

  res.render("posts", { posts: posts });
});

app.listen(3000, function () {
  console.log("listening on 3000...");
});
