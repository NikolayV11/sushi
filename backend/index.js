const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3030;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "DELETE", "PATH", "PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.static("public"));
app.use("/public", express.static(path.resolve(__dirname + "/public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/catalog", require("./routes/dishRouter"));
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});
app.listen(PORT, () => {
  console.log("Server PORT: 3030 START....");
});
