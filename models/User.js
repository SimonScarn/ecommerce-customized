const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
      required: [true, "Email required"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    isAdmin: { type: Boolean, default: false },
    favorites: { type: Array, default: [] },
    //? favorites?
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
