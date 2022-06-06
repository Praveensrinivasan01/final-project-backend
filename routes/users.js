var express = require("express");
var router = express.Router();
let userSchema = require("../Schema/schema");

/* GET users listing. */
router.get("/display", async function (req, res) {
  try {
    const result = await userSchema.find();
    res.json({
      message: "Displaying all Records",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/register", async function (req, res) {
  try {
    const result = await userSchema.findOne({ email: req.body.email });
    if (result) {
      res.send("User already exists");
    } else {
      await userSchema.create(req.body);
      res.send("Account created");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
