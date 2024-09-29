const jwt = require("jsonwebtoken");
const verifyToken = async (token) => {
  const Enc_key = process.env.Enc_key;
  try {
    const data = jwt.verify(token, Enc_key);
    return { success: true, data: data, err: "" };
  } catch (error) {
    return { success: false, data: [], err: "" };
  }
};

module.exports = verifyToken;
