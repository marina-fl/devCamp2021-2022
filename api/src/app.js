const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const config = require("./services/config");
const db = require("./services/db");

const port = config.appPort;
const host = config.appHost;

const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");
const likesRoutes = require("./routes/likes");
const commentsRoutes = require("./routes/comments");
const avatarsRoutes = require("./routes/avatars");
// eslint-disable-next-line import/extensions
const logsMiddleware = require("./middleware/logsMiddleware");
// eslint-disable-next-line import/extensions
const errorHandler = require("./middleware/errorHandler");

app.use(
  logsMiddleware({
    db,
    dbTable: config.logsTable,
  })
);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/likes", likesRoutes);
app.use("/comments", commentsRoutes);
app.use("/avatars", avatarsRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello API");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Started at http://${host}:${port}`);
});
