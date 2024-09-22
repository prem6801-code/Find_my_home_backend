const http = require("http");
const express = require("express");
const dbConnect = require("./DB/dbConnect");
//create a server object:

const routes = require("./routes/routes");
const app = express();

app.use(express.json());
dbConnect();

app.use("/", (req, res) => {
  res.send("Hello This is Express App");
});

app.use("/", routes);

app.listen(3001, () => {
  console.log("Server Is Running");
});
