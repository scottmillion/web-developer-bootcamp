var express = require("express");
var app = express();

// "/" => "hi there!"
// req is requst and res is response. These are parameters that you could rename if desired. Req and Res are objects.
app.get("/", function (req, res) {
  res.send("Hi there! <a href='http://www.saigonpads.com/'>Click here</a>");
});
// "/bye" => "Goodbye!"
// "/dog" => "MEOW!"

// Tell Express to listen for requests (start server)

app.listen(3000, function () {
  console.log("Serving demo on port 3000");
});

// Our app.listen above may not work when we upload to a server. He used the below for Cloud9 deployment:
// app.listen(process.env.PORT, process.env.IP, function () {
//   console.log("server has started.");
// });
