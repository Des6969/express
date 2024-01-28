const express = require("express");
const indexRouter = require("./routes");
const app = express();

app.use(express.json());

app.use("/", indexRouter);

app.listen("8001", (req, res) => {
  console.log("server is running");
});
