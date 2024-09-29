const User = require("../DB/models");
require("dotenv").config();
const Enc_key = process.env.Enc_key;
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
      res
        .cookie(
          "token",
          jwt.sign({ email: register.email }, Enc_key, { expiresIn: "10m" })
        )
        .send({
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

const logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0), httpOnly: true }); // Setting expires to the past
  res.send({
    status: 200,
    data: "Sign Out Successfully",
    err: "",
  });
};

module.exports = { register, login, logout };
