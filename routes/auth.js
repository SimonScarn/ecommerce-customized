const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

router.post("/register", async (req, res) => {
  try {
    const bcryptPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcryptPassword,
    });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.status(201).json({
      token,
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        favorites: newUser.favorites,
      },
    });
  } catch (err) {
    res.status(500).json({ code: err.code });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    const password = bcrypt.compareSync(req.body.password, user.password);
    !password && res.status(401).json("wrong password");
    const token =
      jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 3600 }) ||
      "tokenn";
    res.status(200).json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        favorites: user.favorites,
      },
    });
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
