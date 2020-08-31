var express = require("express");
var app = express();

// "/" => "hi there!"
// req is requst and res is response. These are parameters that you could rename if desired. Req and Res are objects.
app.get("/", function (req, res) {
  res.send(
    "Hi there!<br><br><a href='/bye'>Goodbye</a><br><br><a href='/dog'>Dog</a><br><br><a href='/r/shallowSub'>Test Shallow Subreddit</a><br><br><a href='/r/soccer/comments/id/story-name/'>Test Deep Subreddit</a>"
  );
  console.log("Home requested");
});
// "/bye" => "Goodbye!"
app.get("/bye", function (req, res) {
  res.send("Goodbye buddy!<br><br><a href='/'>home</a>");
  console.log("Bye requested");
});

// "/dog" => "MEOW!"
app.get("/dog", function (req, res) {
  res.send("dog!<br><br><a href='/'>home</a>");
  console.log("Dog requested");
});

// Make a pattern to keep your code DRY. Use route parameters, also referred to as route variables or path variables.
// if we go to /r/anything we will activate the below now.
// note that /r/anything/anything will not work. Just the pattern /r/anything
app.get("/r/:variableName", function (req, res) {
  res.send("Welcome to a subreddit<br><br><a href='/'>home</a>");
});

// another example of route paramenters

app.get("/r/:subredditName/comments/:id/:title/", (req, res) => {
  var subreddit = req.params.subredditName; // let's us access what we typed for subredditName in URL.
  var varList =
    "<br>" +
    req.params.subredditName +
    "<br>" +
    req.params.id +
    "<br>" +
    req.params.title;

  res.send(
    "This is a very deep subreddit indeed!<br><br>Here is the paramenter subredditName in uppercase!: " +
      subreddit.toUpperCase() +
      "</br>And all params used: " +
      varList +
      "<br><br><a href='/'>home</a>"
  );
  console.log("--------------------");
  console.log(req); // shows you everything passed when making request
  console.log(req.params); // an object stored in req. Shows your parameters in URL.
  console.log("--------------------");
});

// The * route matches any routes you have not defined. Like a 404 error page...
// You have to put this route last or all pages will go here.
// ORDER OF ROUTES MATTERS - First route that matches is run.

app.get("*", function (req, res) {
  res.send("This route does not exist! <br><br><a href='/'>Go Home</a>");
});

// Tell Express to listen for requests (start server)

app.listen(3000, function () {
  console.log("Serving demo on port 3000");
});

// Our app.listen above may not work when we upload to a server. He used the below for Cloud9 deployment:
// app.listen(process.env.PORT, process.env.IP, function () {
//   console.log("server has started.");
// });
