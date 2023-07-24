import React, { useEffect, useState } from "react";
import pizzaIcon from "../../assets/icons/pizza-icon.png";
import saladIcon from "../../assets/icons/salad-icon.png";
import tomato from "../../assets/images/tomato.png";
import carrots from "../../assets/images/carrots.png";
import lettus from "../../assets/images/lettus.png";
import noodels from "../../assets/icons/noodles-icon.png";
import dessert from "../../assets/icons/dessert-icon.png";
import "./HomePage.css";

import {
  CategoriesInterF,
  categoryInterF,
} from "../../Interface/HomePageInterF";
import RecipeCard from "./components/RecipeCard";
import { FoodService } from "../../api/FoodRecipesApi";
import {
  FoodRecipeInterF,
  FoodRecipesType,
} from "../../Interface/FoodRecipesInterF";
import Footer from "../../components/Footer";

const MiddleContainer: React.FC = () => {
  const [selectedFood, setSelectedFood] = useState("salad");
  const [selectedRecipes, setSelectedRecipes] = useState<FoodRecipesType>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [categories] = useState<CategoriesInterF>([
    { icon: pizzaIcon, title: "Pizza" },
    { icon: saladIcon, title: "Salad" },
    { icon: noodels, title: "Noodles" },
    { icon: dessert, title: "Dessert" },
  ]);
  const loadFoodByType = async () => {
    FoodService.getFoodByType(selectedFood).then((data) => {
      setSelectedRecipes(data?.reverse().slice(0, 6) as FoodRecipesType);
    });
  };
  const handleUpdateSelectedFood = () => {
    console.log(categories[selectedIndex].title);
    setSelectedFood(categories[selectedIndex].title.toLowerCase());
  };
  useEffect(() => {
    loadFoodByType();
    handleUpdateSelectedFood();
  }, [selectedFood, selectedIndex]);
  return (
    <div>
      <div className=" w-full py-12 lg:px-32   ">
        {/* leading labels of middle container */}
        <div className="flex flex-row justify-between h-[80px]">
          <div className="flex flex-row">
            <img src={tomato} />
            <img className=" rotate-45 relative right-4 top-4" src={lettus} />
          </div>
          <img src={carrots} />
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="medium-heading text-red-400">Recipes</h1>
          <div className="">
            <p className="text-black p-2 border rounded-md">
              Sorted By
              <select className="text-center ml-1">
                <option value={"newest"}>Newest</option>
                <option value={"rating"}>Rating</option>
                <option value={"prepartion time"}>Preparation Time</option>
              </select>
            </p>
          </div>
        </div>

        <div className="lg:flex lg:flex-row  items-center">
          {/* category div */}
          <div className="flex lg:flex-col flex-row lg:overflow-visible overflow-x-auto">
            {categories.map((category: categoryInterF, index: number) => {
              return (
                <div
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  key={category.title + index}
                  id="category-tile"
                  className={
                    selectedIndex == index
                      ? " flex flex-row justify-start items-center min-w-[200px] mb-5 py-2 px-5 border-2 bg-[#435B66] cursor-pointer text-white   rounded-full"
                      : "flex flex-row justify-start items-center min-w-[200px] mb-5 py-2 px-5 border-2 hover:bg-[#435B66] hover:bg-opacity-80 cursor-pointer hover:text-white bg-white text-black rounded-full"
                  }
                >
                  <img
                    src={category.icon}
                    className="h-[40px]  w-[45px] mr-5 bg-[#435B66] rounded-md"
                  />
                  <p className="text-xl">{category.title}</p>
                </div>
              );
            })}
          </div>
          <div className="md:ml-5  w-[95%] mx-auto  p-4 grid md:grid-cols-3 sm:grid-cols-2 gap-2">
            {selectedRecipes &&
              selectedRecipes.map((typeRecipe, index) => {
                return (
                  <RecipeCard
                    key={+index}
                    imgUrl={typeRecipe.img_url}
                    title={typeRecipe.Name}
                    calories={typeRecipe.nutrition.kcal}
                    cookingTime={typeRecipe.food_stats.cook_time}
                    author={typeRecipe.Author}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
