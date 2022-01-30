
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const config = require('./services/config');

const port =  config.appPort; 
const host = process.env.APP_HOST; 

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const likesRoutes = require('./routes/likes');
const commentsRoutes = require('./routes/comments');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/likes', likesRoutes);
app.use('/comments', commentsRoutes);

app.get('/', (req, res) => {
  res.send('Hello API');
});

app.listen(port, () => {

// eslint-disable-next-line no-console
console.log(`Started at http://${host}:${port}`); 

});
