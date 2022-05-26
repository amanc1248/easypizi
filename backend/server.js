const express = require("express");
const path = require("path");
const { db } = require("../database/db.js");
const dotenv = require("dotenv");
const mysql = require("mysql");
const app = express();
dotenv.config();
const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
};

var connection = mysql.createPool(options);

const PORT = process.env.PORT || 3001;
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Api is running");
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
} else {
  app.get("/api", (req, res) => {
    res.send("Api is running");
  });
}

app.listen(PORT, console.log("server is running"));
