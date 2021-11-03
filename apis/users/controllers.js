// const User = require("../../db/models/User");
// const bcrypt = require("bcrypt");

// exports.signup = async (req, res, next) => {
//   try {
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.genSalt(req.body.password, saltRounds);
//     req.body.password = hashedPassword;

//     const newUser = User.create(req.body);

//     res.status(201).json({ message: "User Created" });
//   } catch (error) {
//     next(error);
//   }
// };
