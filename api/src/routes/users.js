const router = require("express").Router();

router.get("/:id(\\d+)", (req, res) => {
  res.send("Get a user");
});

router.get("/", (req, res) => {
  res.send("Get users");
});

router.put("/user/:id(\\d+)/update", (req, res) => {
  res.send("Update user's profile");
});

router.delete("/user/:id(\\d+)/delete", (req, res) => {
  res.send("Delete user's profile");
});

router.get("/user/:id(\\d+)/friends", (req, res) => {
  res.send("Get user's friends");
});




module.exports = router;