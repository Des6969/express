const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello from books" });
  } catch (e) {
    next(e);
  }
});
//id chaidaina direct post garchau
//naya haldaichau
router.post("/", (req, res, next) => {
  try {
    res.json({ msg: "create mew books" });
  } catch (e) {
    next(e);
  }
});
//id compulsory
router.put("/:id", (req, res, next) => {
  try {
    if (!req.body) throw new Error("body is missing");
    res.json({ msg: "update multiple properties of books" });
  } catch (e) {
    next(e);
  }
});
//kun ma change gardaichau tyo patta lagaunu paryo
router.patch("/:id", (req, res, next) => {
  try {
    if (!req.body) throw new Error("body is missing");
    //logic
    res.json({ msg: "update single item of books" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
    res.json({ msg: "delete certain items form books" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
