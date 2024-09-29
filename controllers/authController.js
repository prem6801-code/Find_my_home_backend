const User = require("../DB/models");

const register = async (req, res) => {
  const { fullName, mobile, email, password } = req.body;
  try {
    const account = await User.findOne({ email: email });

    if (account) {
      res.send({
        status: 401,
        data: {},
        err: "User Already Exist",
      });
    } else {
      const newUser = {
        fullName,
        email,
        mobile_no: mobile,
        avatar: "default",
        password,
      };

      const register = await User.create(newUser);
      res.send({
        status: 200,
        data: register,
        err: "",
      });
    }
  } catch (err) {
    res.send({
      status: 401,
      data: {},
      err: "Could Not Register Please try Again ..!",
    });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const account = await User.findOne({
      email: email,
      password: password,
    }).select({
      fullName: 1,
      email: 1,
      mobile_no: 1,
      _id: 0, 
    });

    if (account) {
      res.send({
        status: 401,
        data: account,
        err: "",
      });
    } else {
      res.send({
        status: 401,
        data: {},
        err: "User Not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {};

module.exports = { register, login, logout };
