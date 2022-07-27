const express = require("express");

const router = new express.Router();
const db = require("../services/db");

router.get("/", async (req, res) => {
const allLikes = await db.select().from("post_likes");
return res.status(200).json(allLikes);
});

router.get("/:idpost", async (req, res) => {
  const { idpost } = req.params;
  const postLikes= await db.select().from("likes").where("idposts", idpost);
  res.status(200).json(postLikes);
});

router.get("/:idpost/:id", async (req, res) => {
    const { idpost, id } = req.params;
    const oneLike = await db.select().from("likes").where("idposts", idpost).andwhere("idlikes", id);
    res.status(200).json(oneLike);
  });

router.post("/", async (req, res) => {
  
  await db.insert(req.body).into("post_likes");
  res.status(200).json("Like post");
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await db.select("post_likes").where("idlikes", id).del();
    res.status(200).json("Like is not active yet");
  });

module.exports = router;