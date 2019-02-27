const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(3000, () => console.log("listening on port 3004"));

app.set("3000", process.env.PORT || 3004);

app.listen(app.get("3000"), () => {
  console.log(`✅ PORT: ${app.get("3004")} 🌟`);
});
