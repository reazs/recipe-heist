import React from "react";
import { Nutrition } from "../../Interface/FoodRecipesInterF";
import NutriationFactTile from "./Components/NutriationFactTile";

const NutriationInfo = ({
  kcal,
  fat,
  saturates,
  carbs,
  sugars,
  fibre,
  salt,
  protein,
}: Nutrition) => {
  return (
    <div className="mx-5 p-6  max-w-[500px]">
      <NutriationFactTile title="Calories" value={kcal} />
      <NutriationFactTile title="Total Fat" value={fat} />
      <NutriationFactTile title="Saturated Fat" value={saturates} />
      <NutriationFactTile title="Protien" value={protein} />
      <NutriationFactTile title="Carbs" value={carbs} />
      <NutriationFactTile title="Sugars" value={sugars} />
      <NutriationFactTile title="Salt" value={salt} />
      <NutriationFactTile title="Fibre" value={fibre} />
      {/* bottom border closing */}
      {/* <div className="w-full border-t-2" /> */}
    </div>
  );
};

export default NutriationInfo;
