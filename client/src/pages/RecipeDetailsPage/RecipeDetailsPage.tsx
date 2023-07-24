import React, { useEffect, useState } from "react";
import RecipeInfoContainer from "./RecipeInfoContainer";
import { useParams } from "react-router-dom";
import "./RecipeDetailsPage.css";
import NutriationInfo from "./NutriationInfo";
import RecipeSteps from "./Components/RecipeSteps";
import { FoodRecipeInterF } from "../../Interface/FoodRecipesInterF";
import { FoodService } from "../../api/FoodRecipesApi";
import Utils from "../../utils/Utils";
import LoadinIndicator from "../../components/LoadingIndicator";
const RecipeDetailsPage: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState("ingredient");
  const { title, author } = useParams();
  const [recipe, setRecipe] = useState<FoodRecipeInterF>();
  const [isLoading, setIsLoading] = useState(true);
  console.log(title);
  const handleLoadingPage = async () => {
    await Utils.delay(500);
    setIsLoading(false);
  };
  const loadRecipeData = () => {
    FoodService.getRecipeDetails(title as string, author as string).then((data) => {
      setRecipe(data);
    });
  };
  useEffect(() => {
    loadRecipeData();
    handleLoadingPage();
  }, [activeBtn]);
  return (
    <>
      {isLoading ? (
        <LoadinIndicator />
      ) : (
        <>
          {recipe && (
            <div className=" mx-auto max-w-screen-xl sm:mt-[100px] mt-[50px]">
              <RecipeInfoContainer
                {...recipe}
                cookTime={recipe.food_stats.cook_time}
                calories={recipe.nutrition.kcal}
              />
              <div className="mt-[50px]  inline-block mx-5   rounded-t-md ">
                <div
                  id="ingredient"
                  onClick={() => {
                    setActiveBtn("ingredient");
                  }}
                  role="button"
                  className={
                    activeBtn == "ingredient"
                      ? "active-btn inline-block py-2 px-4"
                      : " inline-block opacity-60 py-2 px-4 inactive bg-opacity-60"
                  }
                >
                  <p className="md:text-2xl sm:text-xl text-xs font-['Montserrat'] font-bold">
                    {" "}
                    Ingredient
                  </p>
                </div>
                <div
                  id="nutriation"
                  onClick={() => {
                    setActiveBtn("nutriation");
                  }}
                  role="button"
                  className={
                    activeBtn === "nutriation"
                      ? "active-btn inline-block py-2 px-4"
                      : " inline-block opacity-60 py-2 px-4 inactive bg-opacity-60"
                  }
                >
                  <p className="md:text-2xl sm:text-xl text-xs font-['Montserrat'] font-bold">
                    {" "}
                    Nutriation
                  </p>
                </div>
                <div
                  id="recipe"
                  onClick={() => {
                    setActiveBtn("recipe");
                  }}
                  role="button"
                  className={
                    activeBtn === "recipe"
                      ? "active-btn inline-block py-2 px-4"
                      : " inline-block opacity-60 py-2 px-4 inactive bg-opacity-60"
                  }
                >
                  <p className="md:text-2xl sm:text-xl text-xs font-['Montserrat'] font-bold">
                    {" "}
                    Recipe
                  </p>
                </div>
              </div>
              <div className=" w-[full] border mx-5 ">
                {activeBtn === "ingredient" && (
                  <div className="mx-5  p-6">
                    <ul>
                      {recipe.Ingredients.map((ingredient, index) => {
                        return (
                          <li
                            key={ingredient + index}
                            className=" sm:text-xl text-sm py-2 font-['Josefin Sans'] list-disc"
                          >
                            {ingredient}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {activeBtn === "nutriation" && (
                  <div className=" py-6  max-w-[500px]">
                    <NutriationInfo {...recipe.nutrition} />
                  </div>
                )}
                {activeBtn === "recipe" && (
                  <RecipeSteps method={recipe.Method} />
                )}
              </div>

              {/* extra space bottom */}
              <div className="h-[200px]"></div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RecipeDetailsPage;
