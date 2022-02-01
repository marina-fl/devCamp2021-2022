const express = require("express");

const router = new express.Router();
const db = require("../services/db");

const avatarMulter = require("../multer/avatarMulter");

router.post("/:iduser", avatarMulter.single("avatar"), async (req, res) => {
  const { iduser } = req.params;

  if (req.file) {
    const newPath = req.file.path;
    await db("avatars").where({ "iduser":iduser }).update({ "link_": newPath });
    return res.status(200).json(`File is uploaded to ${newPath}`);
  }
  return res.status(500).json("Failed to upload");
});

module.exports = router;
