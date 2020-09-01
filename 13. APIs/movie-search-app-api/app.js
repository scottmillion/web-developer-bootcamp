var express = require("express");
var app = express();
const axios = require("axios");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  let inputFromHomeForm = req.query.search.trim();
  let url = `http://www.omdbapi.com/?s=${inputFromHomeForm}&apikey=4ee02950`;

  axios
    .get(url)
    .then(function (response) {
      // handle success
      // console.log(response.data.Search);
      console.log("success");
      res.render("results", { data: response.data.Search });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

app.listen(3000, (req, res) => {
  console.log("We are running on 3000, sir.");
});
