module.exports = (options) => {
  const { db, dbTable } = options;
  const timeStamp = new Date().toLocaleString();
  return (req, res, next) => {
    db.insert({
      time_stamp: timeStamp,
      http_method: req.method,
      request_url: req.url,
    })
      .into(dbTable)
      .orderBy("time_stamp", "desc")
      .then(() => {
        next();
      });
  };
};
