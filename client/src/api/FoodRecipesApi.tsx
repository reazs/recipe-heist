import {
  FoodRecipeInterF,
  FoodRecipesType,
} from "../Interface/FoodRecipesInterF";
import { BASE_URL, URL_RECIPES_TYPE } from "../constant";

export class FoodService {
  static getFoodByType = async (name: string) => {
    try {
      if (name === "dessert") {
        name = "cake";
      } else if (name === "noodles") {
        name = "noodle";
      }
      const response = await fetch(URL_RECIPES_TYPE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ foodType: name }),
      });
      if (response.status === 200) {
        const new_data = (await response.json()) as FoodRecipesType;
        return new_data;
      } else if (response.status === 404) {
        console.log("no recipes found with that type");
      } else if (response.status === 500) {
        console.log("server fail to return food recipes");
      }
    } catch (error) {
      console.log("Failed to get food recipes by type");
      console.error(error);
    }
  };

  static getRecipeDetails = async (name: string) => {
    try {
      const response = await fetch(BASE_URL + "/recipes/recipe-by-name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });
      if (response.status === 200) {
        const responseData: FoodRecipeInterF = await response.json();
        return responseData;
      }
    } catch (error) {
      console.error(error);
    }
  };
}
