const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-Parser");
const route = require("./routes/index.js");
const methodOverride = require("method-override");

app.set("view engine", "hbs");
app.use(bodyParser.json());

app.use(require("./routes/index"));

app.listen(3010, () => console.log("listening on port 3010"));
