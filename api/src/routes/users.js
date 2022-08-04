const express = require("express");

const router = new express.Router();
const path = require('path');
const db = require("../services/db");
// eslint-disable-next-line import/extensions
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const validateMiddleware = require('../middleware/validateMiddleware');

router.get("/", asyncErrorHandler(async (req, res) => {
  const usersList = await db.select().from("users").orderBy("idusers");
  res.status(200).json(usersList);
}));

router.get("/:id", asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  const getUser = await db.select().from("users").where("idusers", id);
  res.status(200).json(getUser);
}));

router.get('/:id/avatar', asyncErrorHandler(async (req, res) => {
  const { id } = req.params;

  if (+id) {
    const userAvatar = await db('users')
      .join('avatars', 'users.idusers', 'avatars.idusers')
      .where({ "users.idusers": id });

    console.log(path.join(__filename), userAvatar);

    if (userAvatar !== null) {
      res.sendFile(path.join(__filename));
    } else {
      res.status(404).send({ error: 'no avatar' });
    }
  } else {
    res.status(400).send({ error: `No user with id ${id}` });
  }
}));

router.post("/",
  validateMiddleware({
    user_name: {
      required: true,
      min: 2,
      max: 24,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: false,
    },
  },
    {
      user_name: {
        tableName: 'users',
        fieldName: 'user_name',
        id: 'idusers',
      },

      email: {
        tableName: 'users',
        fieldName: 'email',
        id: 'idusers',
      },
      phone: {
        tableName: 'users',
        fieldName: 'phone',
        id: 'idusers',
      },
    }),

  asyncErrorHandler(async (req, res) => {
    await db.insert(req.body).into("users");
    res.status(200).json("Succesfully added to db");
  }));

router.put("/:id",
  validateMiddleware({
    user_name: {
      required: true,
      min: 2,
      max: 24,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: false,
    },
  },
    {
      user_name: {
        tableName: 'users',
        fieldName: 'user_name',
        id: 'idusers',
      },

      email: {
        tableName: 'users',
        fieldName: 'email',
        id: 'idusers',
      },
      phone: {
        tableName: 'users',
        fieldName: 'phone',
        id: 'idusers',
      },
    }),
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    await db("users").where("idusers", id).update(req.body);
    return res.status(200).json("User is succesfully updated");
  }));



router.delete("/:id", asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  await db("users").where("idusers", id).del();
  res.status(200).json("User was deleted from db");
}));

module.exports = router;

