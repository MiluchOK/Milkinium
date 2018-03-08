const authorized = (req, res, next) => {
  console.log("Authorizing...");
  next();
};

module.exports = authorized;