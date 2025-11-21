const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "website-for-deployment/html")));
app.use(express.static(path.join(__dirname, "website-for-deployment")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "website-for-deployment/html/index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running");
});
