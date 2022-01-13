const router = require("express").Router();
const Order = require("../models/Order");
const auth = require("../middleware/auth");

router.post("/create", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(200).send({ newOrder });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:userId", auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
