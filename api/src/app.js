const express = require("express");
require("dotenv").config();
require('./google/auth');
const passport = require('passport');
const session = require('express-session');

const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./services/config");


const port = config.appPort;
const host = config.appHost;

const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");
const likesRoutes = require("./routes/likes");
const commentsRoutes = require("./routes/comments");
const avatarsRoutes = require("./routes/avatars");
const protectedPages = require("./google/routs");

// eslint-disable-next-line import/extensions
const errorHandler = require("./middleware/errorHandler");


app.use(session({ secret: config.secret }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/likes", likesRoutes);
app.use("/comments", commentsRoutes);
app.use("/avatars", avatarsRoutes);
app.use(errorHandler);
app.use("/protected", protectedPages);

app.get("/", (req, res) => {
  res.send("Hello API");
});



app.get("/auth/google",
  passport.authenticate('google',
    {

      scope: ['email', 'profile']
    })
);

app.get("/google/callback",
  passport.authenticate('google',
    {

      successRedirect: "/protected",
      failureRedirect: '/auth/failure'
    })
);

app.get("/auth/failure", async (req, res) => {

  res.send('something went wrong during authorization');
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Started at http://${host}:${port}`);
});
