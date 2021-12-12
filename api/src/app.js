const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', function (req, res) {
    res.send('Hello API');
});

app.listen(process.env.PORT, function () {
        console.log(
        `API started at http://${process.env.HOST}:${process.env.PORT}`
    );
});
some mistake