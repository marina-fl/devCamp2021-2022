const express = require('express');

const app = express();

app.use("/api", require("./api"));

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.listen(process.env.PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Started at http://${process.env.HOST}:${process.env.PORT}`);
});



