let dotenv = require("dotenv").config();
const mongoose = require("mongoose");

//process.env.DATABASE_URL + process.env.DATABASE_NAME
mongoose.connect(`${process.env.DATABASE_URL + process.env.DATABASE_NAME}`, {
  useNewUrlParser: true,
});
