import React from "react";
import { HomeSaladCardInterF } from "../../../Interface/HomePageInterF";

const HomeSaladCard = ({
  imgUrl,
  title,
  cookingTime,
  calories,
}: HomeSaladCardInterF) => {
  return (
    <div className="shadow-md rounded-md w-full">
      <img
        src={imgUrl}
        className="lg:h-[250px] h-[150px] w-full object-cover rounded-tr-md rounded-tl-md "
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
  );
};
export default HomeSaladCard;
