const express = require('express');

const router = express.Router();

router.get("/users", (req, res) => {
    res.send("Get a user");
  });
  
  router.put("/users/:id(\\d+)/update", (req, res) => {
    res.send("Update user's profile");
  });
  
  router.delete("/users/:id(\\d+)/delete", (req, res) => {
    res.send("Delete user's profile");
  });
  
  module.exports = router;