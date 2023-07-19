import React, { useEffect, useState } from "react";
import RecipeInfoContainer from "./RecipeInfoContainer";
import shoppingBagIcon from "../../assets/icons/shopping-bag-icon.png";
import "./RecipeDetailsPage.css";
import NutriationInfo from "./NutriationInfo";
import RecipeSteps from "./Components/RecipeSteps";
const RecipeDetailsPage: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState("ingredient");
  const methods = [
    "Heat oven to 190C/fan 170C/gas 5. Heat 1 tbsp oil and the butter in a frying pan, then add the onion and fry for 5 mins until softened. Cool slightly. Tip the sausagemeat, lemon zest, breadcrumbs, apricots, chestnuts and thyme into a bowl. Add the onion and cranberries, and mix everything together with your hands, adding plenty of pepper and a little salt.",
    "Cut each chicken breast into three fillets lengthwise and season all over with salt and pepper. Heat the remaining oil in the frying pan, and fry the chicken fillets quickly until browned, about 6-8 mins.",
    "Roll out two-thirds of the pastry to line a 20-23cm springform or deep loose-based tart tin. Press in half the sausage mix and spread to level. Then add the chicken pieces in one layer and cover with the rest of the sausage. Press down lightly.",
    "Roll out the remaining pastry. Brush the edges of the pastry with beaten egg and cover with the pastry lid. Pinch the edges to seal, then trim. Brush the top of the pie with egg, then roll out the trimmings to make holly leaf shapes and berries. Decorate the pie and brush again with egg.",
    "Set the tin on a baking sheet and bake for 50-60 mins, then cool in the tin for 15 mins. Remove and leave to cool completely. Serve with a winter salad and pickles.",
  ];
  const ingredients = [
    "250g Ground beef",
    "450g Potatoes",
    "150g Shredded cabbage",
    "100g Matchstick carrots",
    "1 Bunch of cilantro",
    "1 Lime",
    "60ml Mayonnaise",
    "20g Cornmeal",
    "30g Cotija cheese (contains lipase)",
    "2 Classic hamburger buns",
    "11g Mexican Moments spices (salt, chili powder, garlic, sugar, paprika, coriander seeds, black pepper, cumin, onion, oregano, lime oil)",
  ];
  const nutrition = {
    kcal: "454",
    fat: "28g",
    saturates: "10g",
    carbs: "29g",
    sugars: "6g",
    fibre: "4g",
    protein: "19g",
    salt: "0.9g",
  };
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
                {ingredients.map((ingredient) => {
                  return (
                    <li className=" sm:text-xl text-sm py-2 font-['Josefin Sans'] list-disc">
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {activeBtn === "nutriation" && (
            <div className=" py-6  max-w-[500px]">
              <NutriationInfo {...nutrition} />
            </div>
          )}
          {activeBtn === "recipe" && <RecipeSteps method={methods} />}
        </div>

        {/* extra space bottom */}
        <div className="h-[200px]"></div>
      </div>
    </>
  );
};

export default RecipeDetailsPage;
