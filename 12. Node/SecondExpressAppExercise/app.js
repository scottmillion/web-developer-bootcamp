var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send(
    "Hi there, welcome to my assignment!<br><br><a href='/speak/cow/'>Cow</a><br><br><a href='/speak/pig/'>Pig</a><br><br><a href='/speak/dog/'>Dog</a><br><br><a href='/speak/fox/'>Fox</a><br><br><a href='/repeat/hello/3'>hello 3</a><br><br><a href='/repeat/hello/5'>hello 5</a><br><br><a href='/repeat/blah/2'>blah 2</a><br><br><a href='/sdfsf/sfksfjslj'>Universal *</a>"
  );
});

app.get("/speak/:animal", function (req, res) {
  var animal = req.params.animal;
  var animalSound = {
    cow: "moo",
    pig: "oink",
    dog: "woof",
  };
  res.send(
    "The " +
      animal +
      " says " +
      (animalSound[animal] || "yup yup yup yup yaduppadup") +
      "!" +
      "<br><br><a href='/'>Home</a>"
  );
});

app.get("/repeat/:word/:num", (req, res) => {
  var word = req.params.word;
  var num = req.params.num;
  var phrase = word;
  for (let i = 1; i < num; i++) {
    phrase += " " + word;
  }
  res.send(phrase + "<br><br><a href='/'>Home</a>");
});

app.get("*", (req, res) => {
  res.send(
    "Sorry, page not found...What are you doing with your life?<br><br><a href='/'>Home</a>"
  );
});

app.listen(3000, function () {
  console.log("Server is on port 3000");
});
