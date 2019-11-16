const express = require("express");
const app = express();

app.set('view engine', 'ejs');

// app.get("/", (req, res) => res.render("index.ejs"));

// passing in a variable
app.get("/printName/:name", (req, res) => {
  const name = req.params.name;
  res.render("index.ejs", {
    title: name
  });
});

app.get("/loops", (req, res) => {
  arr = ["yael", "is", "really", "cool"];

  res.render("loops.ejs", {
    data: arr
  });
});

app.get("/templates", (req, res) => res.render("template.ejs"));


app.listen("3000", () => console.log("listening on port 3000"));
