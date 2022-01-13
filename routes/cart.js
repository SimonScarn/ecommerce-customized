const router = require("express").Router();
const Cart = require("../models/Cart");

router.get("/find/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json("found cart");
  } catch (err) {
    res.status(500);
  }
});

router.post("/create", async (req, res) => {
  const newCart = new Cart(req.body);
  console.log(newCart)
  try {
    await newCart.save();
    res.status(201).json(newCart);
  } catch (err) {
    res.status(500);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    console.log('puttin', req.body.products)
    const updatedCart = await Cart.findOneAndUpdate(
     {userId: req.params.id},
      { $set: {products: [req.body.products]}}

    );
    console.log(updatedCart)

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500);
  }
});

router.delete("/delete/:id", async (req, res) => {
    try {
      console.log(req.params.id)
      await Cart.findOneAndDelete({userId: req.params.id});
      res.status(200).json("cart deleted");
    } catch (err) {
      res.status(500);
    }
  });

module.exports = router;
