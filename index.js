const express = require("express");
const app = express();
const handlebars = require("hbs");
const bodyParser = require("body-Parser");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(require("./routes/index.js"));

app.listen(3009, () => console.log("listening on port 3009"));
