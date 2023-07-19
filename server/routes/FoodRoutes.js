const express = require("express");
const axios = require("axios");
const route = express.Router();
const recipes = require("../models/recipes");

route.get("/", async (re, res) => {
  try {
    return res.json(recipes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
      message: "server error",
    });
  }
});

route.post("/recipe-by-type", async (req, res) => {
  foodType = req.body.foodType;
  try {
    const new_recipes = recipes.filter((recipe) => {
      return recipe.Name.includes(foodType);
    });
    if (new_recipes) {
      return res.status(200).json(new_recipes);
    } else {
      return res.status(404).json({ message: "404 item not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error });
  }
});

//  get recipe by name

route.post("/recipe-by-name", async (req, res) => {
  const name = req.body.name;

  try {
    const recipe = recipes.find((recipe) => recipe.Name === name);
    if (recipe) {
      return res.status(200).json(recipe);
    } else {
      return res.status(404).json({ message: "cannot not find that recipe" });
    }
  } catch (e) {
    return res.status(500).json({ message: "server error", error: e });
  }
});

module.exports = route;
