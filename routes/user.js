const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  //!just get /user
  try {
    const user = await User.findOne({ _id: req.user.id });

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
    });
  } catch (err) {
    res.status(500);
  }
});

router.put("/", auth, async (req, res) => {
  try {
    if (req.body.password.length < 8) {
      throw err;
    }

    const user = await User.findById(req.user.id);
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = await bcrypt.hash(req.body.password, 10);
    const updatedUser = await user.save({ runValidators: true });
    res.status(200).json({
      user: {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        favorites: updatedUser.favorites,
      },
    });
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/", auth, async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.user.id);
    res.status(200).json({ msg: "userino deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const password = bcrypt.compareSync(req.body.password, user.password);
    if (password) {
      res.status(200).json({ status: "success" });
    } else {
      res.status(200).json({ status: "error" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//! favorites
router.get("/favorites", auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    res.status(200).json(user.favorites);
  } catch (err) {
    res.status(500);
  }
});

router.put("/favorite/add", auth, async (req, res) => {
  try {
    const userDB = await User.findByIdAndUpdate(
      { _id: req.user.id },
      { $addToSet: { favorites: req.body.itemId } }
    );
    res.status(201).json("added do favs");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/favorite/delete", auth, async (req, res) => {
  try {
    const userDB = await User.findByIdAndUpdate(
      { _id: req.user.id },
      { $pull: { favorites: { id: req.body.itemId } } }
    );

    res.status(201).json("removed from favs");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
