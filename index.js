const express = require("express");
const indexRouter = require("./routes");
const app = express();

app.use(express.json());

app.use("/", indexRouter);
app.use((err, req, res, next) => {
  const errmsg = err ? err.toString() : "something went wrong";
  res.status(500).json({ msg: errmsg });
});

app.listen("8001", (req, res) => {
  console.log("server is running");
});
