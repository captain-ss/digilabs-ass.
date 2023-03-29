const express = require("express");
const app = express();

const connectDb = require("./DB/connect");

const mainRouter = require("./Routes/route");
var cors = require("cors");
require("dotenv").config();
app.use(express.json());

app.use(cors());

app.set("view engine", "ejs");
const port = 3005;
const start = async () => {
  try {
 
    await connectDb(process.env.MONGODB_URI);
    app.listen(port, console.log(`you server lishening in port ${port}`));
  } catch (error) {
    console.log(error);
  }
};