const express = require("express");
const router = new express.Router();
const db = require("../services/db");

router.get("/", async (req, res) => {
const allComments = await db.select().from("comments_");
return res.status(200).json(allComments);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const postComments= await db.select().from("comments_").where("id", id);
  res.status(200).json(postComments);
});

router.get("/:idpost/:id", async (req, res) => {
    const { idpost, id } = req.params;
    const oneComment = await db.select().from("likes").where("idposts", idpost).andwhere("idcomments", id);
    res.status(200).json(oneComment);
  });

router.post("/", async (req, res) => {
  const created_at = currentDatetime;
  await db.insert({ ...req.body, created_at: created_at }).into("comments_");
  res.status(200).json("Comment is published");
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updated_at = currentDatetime;
    const updateComment = { ...req.body, updated_at: updated_at };
    await db.select("comments_").where("id", id).update(updateComment);
    return res.status(200).json(`comment is updated`);
  });

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await  db.select().from('comments').where('idcomments', id).del()
    res.status(200).json("comment is not available");
  });

module.exports = router;