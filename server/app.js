const express = require("express");
const app = express();

const connectDb = require("./DB/connect");

var cors = require("cors");
require("dotenv").config();
app.use(express.json());

app.use(cors());

app.set("view engine", "ejs");
app.use("/v1/login")
const port = 3005;
const start = async () => {
  try { 
    app.listen(port, console.log(`you server lishening in port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start()