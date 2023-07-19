import { FoodRecipesType } from "../Interface/FoodRecipesInterF";
import { URL_RECIPES_TYPE } from "../constant";

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
}
