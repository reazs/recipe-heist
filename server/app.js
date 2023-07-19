const mongoose = require("mongoose");
const express = require("express");
const recipes = require("./routes/FoodRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/recipesHeist");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
      app.use("/recipes", recipes);
    });
  } catch (error) {
    console.log("Error conntecting to server: ", error);
  }
}

main();
