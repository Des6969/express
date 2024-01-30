const router = require("express").Router();
const bookRouter = require("./books.routes");
const userRouter = require("./user.routes");

// const apiIndex = "/api/v2";
// router.use(`${apiIndex}/books`, bookROuter);dynamic banako
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from index" });
  } catch (e) {
    next(e);
  }
});
router.use("/api/v1/books", bookRouter);
router.use("/api/v1/users", userRouter);
module.exports = router;
