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

app.set("port", process.env.PORT || 4005);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
