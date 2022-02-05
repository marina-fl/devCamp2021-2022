const express = require("express");

const router = new express.Router();
const db = require("../services/db");

const avatarMulter = require("../multer/avatarMulter");

router.post("/:iduser", avatarMulter.single("avatar"), async (req, res) => {
  const { iduser } = req.params;
  const createdAt = new Date().toLocaleString();
  
  if (req.file) {
    const newPath = req.file.path;
    await db.insert({ ...req.body, "idusers": iduser, "link_": newPath, "created_at": createdAt}).into("avatars");
    return res.status(200).json(`File is uploaded to ${newPath}`);
  }
  return res.status(500).json("Failed to upload");
});

router.put("/:iduser", avatarMulter.single("avatar"), async (req, res) => {
  const { iduser } = req.params;
  const createdAt = new Date().toLocaleString();
  if (req.file) {
    const newPath = req.file.path;
    await db("avatars").where("idusers", iduser).update({ "link_": newPath, "created_at": createdAt} );
    return res.status(200).json(`File is uploaded to ${newPath}. Database is updated`);
  }
  return res.status(500).json("Failed to upload");
});

router.get("/", async (req, res) => {
  const avatars = await db.select().from("avatars");
  res.status(200).json(avatars);
});

router.get("/:iduser", async (req, res) => {
  const { iduser } = req.params;
  const avatar = await db.select().from("avatars").where("idusers", iduser);
  res.status(200).json(avatar);
});

module.exports = router;
