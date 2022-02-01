const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "/images");
  },
  filename(req, file, cb) {
    cb(null, new Date().toString() + path.extname(file.originalname));
  },
});

const types = ["image/png", "image/jpeg", "image/jpg"];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
