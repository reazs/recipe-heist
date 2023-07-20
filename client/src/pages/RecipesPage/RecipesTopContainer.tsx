import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import CookingFood from "../../assets/lottieFile/cooking-food.json";
const RecipesTopContainer: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 mt-[50px] ">
      <div className="flex flex-row items-center justify-center">
        <div className="">
          <h2 className="font-['Montserrat'] lg:text-start text-center text-4xl ">
            Elevate Your Culinary Skills: <br />{" "}
          </h2>
          <p className="text-xl text-center ">
            Discover the Joy of Cooking with Flavorful Creations!
          </p>
        </div>
      </div>
      <div className="">
        <Player
          className=" max-w-[500px] object-contain"
          src={CookingFood}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default RecipesTopContainer;
