export interface FoodRecipeInterF {
  Name: string;
  url: string;
  Author: string;
  Ingredients: string[];
  Method: string[];
  img_url: string;
  nutrition: Nutrition;
  food_stats: FoodStats;
  Description: string;
}
export interface Nutrition {
  kcal: string;
  fat: string;
  saturates: string;
  carbs: string;
  sugars: string;
  fibre: string;
  protein: string;
  salt: string;
}
export interface FoodStats {
  prep: string;
  cook_time: string;
  difficulty: string;
  serves: string;
}
export type FoodRecipesType = FoodRecipeInterF[];
