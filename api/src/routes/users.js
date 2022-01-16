const express = require("express");

const router = new express.Router();
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

