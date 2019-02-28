const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// // creates the variable "app" global to get methods

// app.get("/", (request, response) => {
//   response.render("Hello World");
// });

// Getting URL from the homepage and request the response and then send the response "Hello World"

app.get("/", (req, res) => {
  res.render("index");
});

app.use(require("./routes/index"));

// app.get("/post", (req, res) => {
//   res.render("post");
// });

// app.get("/response", (req, res) => {
//   res.render("response");
// });

app.listen(4005, () => console.log("listening on port 4005"));
