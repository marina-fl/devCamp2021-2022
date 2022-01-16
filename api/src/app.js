
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./services/config');

const port = config.appPort;
const host = config.appHost;

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const likesRoutes = require('./routes/likes');
const commentsRoutes = require('./routes/comments');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/likes', likesRoutes);
app.use('/comments', commentsRoutes);

app.get('/', (req, res) => {
  res.send('Hello API');
});

app.listen(port, () => {

      console.log(`Started at http://${host}:${port}`);
});
