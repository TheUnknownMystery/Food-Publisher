const mongoose = require("mongoose");
const validator = require("validator");

//Creating a schema for the food model
const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    lowercase: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate(val) {
      if (validator.isEmail(val) != true) {
        throw new Error("Invalid Email");
      }
    },
  },

  contact: {
    type: String,
    required: true,
    validate(contact) {
      if (!validator.isMobilePhone(contact)) {
        throw new Error("invalid phone number");
      }
    },
  },
});

//registering the schema with mongoose
const Food = mongoose.model("Food", FoodSchema);

//exporting the schema
module.exports = Food;
