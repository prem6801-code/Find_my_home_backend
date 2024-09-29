const http = require("http");
const express = require("express");
const dbConnect = require("./DB/dbConnect");
const cors = require("cors");
//create a server object:

const routes = require("./routes/routes");
const app = express();

app.use(express.json());
dbConnect();
app.use(cors());
app.use("/findmyhome", routes);

app.use("/findmyhome", (req, res) => {
  res.send("Hello This is Express App");
});

app.listen(3001, () => {
  console.log("Server Is Running");
});
