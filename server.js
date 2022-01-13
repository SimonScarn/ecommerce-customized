require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/orders", orderRoute);
app.use("/cart", cartRoute);

mongoose.connect(process.env.MONGO_URL).then(() => console.log("db connected"));

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 8000, () => {
  console.log("server listening on ", process.env.PORT);
});
