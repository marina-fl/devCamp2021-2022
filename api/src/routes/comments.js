const express = require("express");

const router = new express.Router();
const db = require("../services/db");
// eslint-disable-next-line import/extensions
const asyncErrorHandler = require("../middleware/asyncErrorHandler");

// a list of all comments:

router.get(
  "/",
  asyncErrorHandler(async (req, res) => {
    const allComments = await db.select().from("comments_");
    return res.status(200).json(allComments);
  })
);

// to get one comment by id:

router.get(
  "/:id",
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const oneComment = await db
      .select()
      .from("comments_")
      .where("idcomments", id);
    res.status(200).json(oneComment);
  })
);

// to get comments to the defined by id post:

router.get(
  "/post/:idpost",
  asyncErrorHandler(async (req, res) => {
    const { idpost } = req.params;
    const commentsToPost = await db
      .select()
      .from("comments_")
      .where("idposts", idpost);
    res.status(200).json(commentsToPost);
  })
);

// to get comments to the defined by id parent comment:

router.get(
  "/post/:idpost/:idparent",
  asyncErrorHandler(async (req, res) => {
    const { idparent, idpost } = req.params;
    const commentsToComment = await db
      .select()
      .from("comments_")
      .where({ parent_comment: idparent, idposts: idpost });
    res.status(200).json(commentsToComment);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res) => {
    const createdAt = new Date().toLocaleString();
    await db.insert({ ...req.body, created_at: createdAt }).into("comments_");
    res.status(200).json("Comment is published");
  })
);

router.put(
  "/:id",
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const updatedAt = new Date().toLocaleString();
    const updateComment = { ...req.body, updated_at: updatedAt };
    await db.select("comments_").where("id", id).update(updateComment);
    return res.status(200).json(`comment is updated`);
  })
);

router.delete(
  "/:id",
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    await db.select().from("comments").where("idcomments", id).del();
    res.status(200).json("comment is not available");
  })
);

module.exports = router;
