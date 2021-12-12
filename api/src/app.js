const express = require('express');
require('dotenv').config();

const app =express();

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.listen(process.env.PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`API started at http://${process.env.HOST}:${process.env.PORT}`);
});

var m = 0;

