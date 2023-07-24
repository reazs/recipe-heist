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
  const { name, author } = req.body;
  try {
    //  small bugs name are not unique so find other way to update this
    const recipe = recipes.find(
      (recipe) => recipe.Name === name && recipe.Author === author
    );
    if (recipe) {
      return res.status(200).json(recipe);
    } else {
      return res.status(404).json({ message: "cannot not find that recipe" });
    }
  } catch (e) {
    return res.status(500).json({ message: "server error", error: e });
  }
});

route.post("/search", async (req, res) => {
  const query = req.body.query;
  try {
    const lowerCaseQuery = query.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) => {
      const { Name, Description, Author, Ingredients, Method } = recipe;
      if (
        Name.toLowerCase().includes(lowerCaseQuery) ||
        Method.some((step) => step.toLowerCase().includes(lowerCaseQuery))
      ) {
        return recipe;
      }
    });
    return res.status(200).json(filteredRecipes);
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error });
  }
});

module.exports = route;
