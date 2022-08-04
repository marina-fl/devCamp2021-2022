const express = require("express");
require('./auth');

const router = new express.Router();

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get("/", isLoggedIn, async (req, res) => {

    res.send('Authorized!');
});

module.exports = router;
