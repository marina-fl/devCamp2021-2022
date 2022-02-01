const express = require("express");

const router = new express.Router();
const path = require('path');
const db = require("../services/db");

router.get("/", async (req, res) => {
  const usersList = await db.select().from("users").orderBy("idusers");
  res.status(200).json(usersList);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getUser = await db.select().from("users").where("idusers", id);
  res.status(200).json(getUser);
});

router.get('/:id/avatar', async (req, res) => {
  const { id } = req.params;
  
  if (+id) {
    const userAvatar = await db('users')
      .join('avatars', 'users.idusers', 'avatars.idusers')
      .where({ "users.idusers": id });

    if (userAvatar !== null) {
      res.sendFile(path.join(__dirname, '/', __filename));
    } else {
      res.status(404).send({ error: 'no avatar' });
    }
  } else {
    res.status(400).send({ error: `No user with id ${id}` });
  }
});

router.post("/", async (req, res) => {
  await db.insert(req.body).into("users");
  res.status(200).json("Succesfully added to db");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await db("users").where("idusers", id).update(req.body);
  return res.status(200).json("User is succesfully updated");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db("users").where("idusers", id).del();
  res.status(200).json("User was deleted from db");
});

module.exports = router;

