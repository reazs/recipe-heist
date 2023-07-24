import React from "react";
import { HomeSaladCardInterF } from "../../../Interface/HomePageInterF";
import { Link } from "react-router-dom";

const RecipeCard = ({
  imgUrl,
  title,
  cookingTime,
  calories,
  author
}: HomeSaladCardInterF) => {
  return (
    <Link to={"/recipe-details/" + title+"/"+author}>
      <div className="shadow-md rounded-md w-full h-full">
        <img
          src={imgUrl}
          className="lg:h-[250px] sm:h-[200px] h-[250px] w-full object-cover rounded-tr-md rounded-tl-md "
        />
        <div className="p-2">
          {/* card title */}
          <h1 className="text-xl line-clamp-2">{title}</h1>
          {/* card description */}

          <div className="mt-3 mb-5">
            <p>
              <span className="text-gray-400">Cook Time:</span> {cookingTime}
            </p>
            <p>
              <span className="text-gray-400">calories:</span> {calories}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RecipeCard;
