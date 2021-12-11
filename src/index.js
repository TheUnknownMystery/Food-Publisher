require("../utils/connection/mongoose");

const express = require("express");
const FoodRouter = require("../utils/routes/FoodRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(FoodRouter);

app.listen(PORT);
