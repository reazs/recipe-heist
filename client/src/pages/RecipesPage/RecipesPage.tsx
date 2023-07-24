import React, { useState, useEffect } from "react";
import RecipesTopContainer from "./RecipesTopContainer";
import LoadinIndicator from "../../components/LoadingIndicator";
import Utils from "../../utils/Utils";
import { FoodRecipesType } from "../../Interface/FoodRecipesInterF";
import { FoodService } from "../../api/FoodRecipesApi";
import RecipeCard from "../HomePage/components/RecipeCard";

const RecipesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState<FoodRecipesType>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recipes?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(recipes?.length / itemsPerPage);
  const handleLoadingPage = async () => {
    await Utils.delay(500);
    setIsLoading(false);
  };
  const handleLoadingRecipes = () => {
    FoodService.getRecipes().then((data) => {
      setRecipes(data as FoodRecipesType);
    });
  };
  useEffect(() => {
    handleLoadingRecipes();
    handleLoadingPage();
  });
  return (
    <>
      {isLoading ? (
        <LoadinIndicator />
      ) : (
        <div className=" max-w-screen-xl mx-auto">
          <div className="mx-5">
            <RecipesTopContainer />
            <div className="mt-[50px]">
              <h4 className=" mb-5 text-2xl font-bold font-['Merriweather'] text-gray-400">
                Recipes
              </h4>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                {recipes &&
                  currentItems.map((recipe, index) => {
                    return (
                      <RecipeCard
                        key={recipe.Name + index}
                        imgUrl={recipe.img_url}
                        title={recipe.Name}
                        cookingTime={recipe.food_stats.cook_time}
                        calories={recipe.nutrition.kcal}
                        author={recipe.Author}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="mt-10 flex flex-row justify-center">
              <i
                onClick={() => {
                  if (currentPage > 11) {
                    window.scrollTo(0, 500);
                    setCurrentPage(currentPage - 10);
                  }
                }}
                className="fa-solid fa-angles-left mr-2 text-white p-2 bg-primary-color hover:bg-[#33c9db] cursor-pointer"
              ></i>
              <i
                onClick={() => {
                  if (currentPage > 1) {
                    window.scrollTo(0, 500);
                    setCurrentPage(currentPage - 1);
                  }
                }}
                className="fa-solid fa-angle-left text-white p-2 bg-primary-color hover:bg-[#33c9db] cursor-pointer"
              ></i>
              <div className="mx-[4%]">
                <p className="text-2xl">{currentPage}</p>
              </div>
              <i
                onClick={() => {
                  if (currentPage < totalPage) {
                    window.scrollTo(0, 500);
                    setCurrentPage(currentPage + 1);
                  }
                }}
                className="fa-solid fa-angle-right text-white p-2 bg-primary-color hover:bg-[#33c9db] cursor-pointer"
              ></i>
              <i
                onClick={() => {
                  if (currentPage + 10 <= totalPage) {
                    window.scrollTo(0, 500);
                    setCurrentPage(currentPage + 10);
                  }
                }}
                className="fa-solid fa-angles-right ml-2 text-white p-2 bg-primary-color hover:bg-[#33c9db] cursor-pointer"
              ></i>
            </div>
            {/* extra space */}
            <div className="h-[100px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default RecipesPage;
