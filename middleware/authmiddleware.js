const verifyToken = require("../controllers/verifyToken");

const authenticateToken = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    verifyToken(token).then((verfication) => {
      if (verfication.success) {
        next();
      } else {
        res.send({
          status: 401,
          data: { msg: "Access Denied" },
          err: "Token Expired",
        });
      }
    });
  } else {
    res.send({
      status: 401,
      data: { msg: "Access Denied" },
      err: "Invalid User",
    });
  }
};

module.exports = authenticateToken;
