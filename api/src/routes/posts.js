const express = require("express");

const router = new express.Router();
const db = require("../services/db");

const currentDatetime = new Date().toLocaleString();
router.get("/", async (req, res) => {
  const posts = await db.select().from("posts").orderBy("idposts");
  res.status(200).json(posts);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const post= await db.select().from("posts").where("idposts", id);
  res.status(200).json(post);
});

router.post("/", async (req, res) => {
  const created_at = currentDatetime;
  await db.insert({ ...req.body, created_at: created_at }).into("posts");
  res.status(200).json("Post is published");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updated_at = currentDatetime;
  const updatePost = { ...req.body, updated_at: updated_at };
  await db("posts").where("id", id).update(updatePost);
  return res.status(200).json(`Post #${id} was updated`);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db("posts").where("idposts", id).del();
  res.status(200).json(`Post #${id} was deleted`);
});

module.exports = router;