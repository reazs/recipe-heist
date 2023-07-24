import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FoodService } from "../../api/FoodRecipesApi";
import { FoodRecipesType } from "../../Interface/FoodRecipesInterF";
import RecipeCard from "../HomePage/components/RecipeCard";
import Utils from "../../utils/Utils";
import LoadinIndicator from "../../components/LoadingIndicator";
import Error404 from "../../components/Error404";

const SearchPage: React.FC = () => {
  const [recipes, setRecipes] = useState<FoodRecipesType>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { query } = useParams();
  const [itemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recipes?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(recipes?.length / itemsPerPage);
  const handleLoadingQuery = () => {
    FoodService.getQueryRecipes(query as string).then((data) => {
      setRecipes(data as FoodRecipesType);
    });
  };
  const handleIsLoading = async () => {
    await Utils.delay(500);
    setIsLoading(false);
  };
  useEffect(() => {
    handleIsLoading();
    handleLoadingQuery();
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadinIndicator />
      ) : (
        <div className=" max-w-screen-lg mx-auto">
          <div className="my-[50px] mx-5">
            <div className="grid grid-cols-3 gap-2">
              {recipes &&
                currentItems.map((recipe, index) => {
                  return (
                    <RecipeCard
                      key={recipe.Name + index}
                      imgUrl={recipe.img_url}
                      title={recipe.Name}
                      calories={recipe.nutrition.kcal}
                      cookingTime={recipe.food_stats.cook_time}
                    />
                  );
                })}
              {recipes.length === 0 && (
                <div className="w-full mx-auto">
                  <Error404 />
                </div>
              )}
            </div>
            {recipes.length !== 0 && (
              <div className="mt-10 flex flex-row justify-center">
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
              </div>
            )}
            {/* extra space */}
            <div className="h-[100px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
