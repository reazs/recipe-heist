import React, { useEffect, useState } from "react";
import RecipeInfoContainer from "./RecipeInfoContainer";
import "./RecipeDetailsPage.css";
const RecipeDetailsPage: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState("ingredient");

  useEffect(() => {}, [activeBtn]);
  return (
    <>
      <div className=" mx-auto max-w-screen-xl sm:mt-[100px] mt-[50px]">
        <RecipeInfoContainer />
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
            <p className="text-2xl font-['Montserrat'] font-bold">
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
            <p className="text-2xl font-['Montserrat'] font-bold">
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
            <p className="text-2xl font-['Montserrat'] font-bold"> Recipe</p>
          </div>
        </div>
        <div className="h-[400px] w-[full] border mx-5"></div>
        {/* extra space bottom */}
        <div className="h-[200px]"></div>
      </div>
    </>
  );
};

export default RecipeDetailsPage;
