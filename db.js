const mongoose = require("mongoose");


async function connectDB() {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch(err => console.error('cant connect to DB ', err))
}

module.exports = connectDB;
