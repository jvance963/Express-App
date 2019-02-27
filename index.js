const express = require("express");
// // this makes express available

//

const app = express();
app.set("view engine", "hbs");

// // creates the variable "app" global to get methods

app.listen(4000, () => {
  console.log("app listening on port 4000");
});

// app.get("/", (request, response) => {
//   response.render("Hello World");
// });

// Getting URL from the homepage and request the response and then send the response "Hello World"

app.get("/", (req, res) => {
  res.render("index", { name: req.params.name });
});
