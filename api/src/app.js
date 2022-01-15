require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require("express").Router();



/* app.get("/app", require("./src/app") => {
    res.send('Hello API 3');
}); */

app.use ("/users", reguire("./routes/users"));

/* app.get('/', (req, res) => {
    res.send('Hello API');
});
 */

app.listen(process.env.APP_PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Started at http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
});

/* const express = require('express');
const bodyParser = require('body-parser');

const config = require('./services/config');
const usersRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');
const articleLikesRoutes = require('./routes/articleLikes');
const commentsRoutes = require('./routes/comments');
const commentLikesRoutes = require('./routes/commentLikes');

const port = config.appPort;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);
app.use('/articleLikes', articleLikesRoutes);
app.use('/comments', commentsRoutes);
app.use('/commentLikes', commentLikesRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
 */
