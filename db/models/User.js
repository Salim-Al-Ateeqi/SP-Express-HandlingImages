const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // email: {
  //   type: String,
  //   trim: true,
  //   lowercase: true,
  //   unique: true,
  //   required: "Email address is required",
  //   // validate: [validateEmail, "Please fill a valid email address"],
  //   match: [
  //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  //     "Please fill a valid email address",
  //   ],
  // },
  // firstName: String,
  // lastName: String,
});

module.exports = model("User", userSchema);
