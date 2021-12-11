const express = require("express");
const Food = require("../models/FoodModel");

const FoodRouter = express.Router();

FoodRouter.post("/publish-food", ({ body }, response) => {
  const { name, description, price, currency, contact, email } = body;
  const food = new Food({
    name,
    description,
    price,
    currency,
    email,
    contact,
  })
    .save()
    .then((food) => {
      response.status(200).json({
        message: "Food published successfully",
        food,
      });
    })
    .catch((error) => {
      response.status(400).json({
        message: "Request failed",
        error,
      });
    });
});

FoodRouter.get("/get-food", async ({ body: { email } }, response) => {
  try {
    Food.find({ email })
      .then((res) => {
        if (res.length != 0) {
          return response.status().send(res);
        }
        response.status(404).send({ error: "No food found" });
      })
      .catch((err) => {
        response.status(500).send(err);
      });
  } catch (error) {
    response.status(500).send(error);
  }
});

FoodRouter.get("/delete-food", async ({ body: { email, name } }, res) => {
  Food.deleteOne({ email, name }, (err, req) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(req);
  });
});

module.exports = FoodRouter;
