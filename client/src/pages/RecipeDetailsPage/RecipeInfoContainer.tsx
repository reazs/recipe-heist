import React from "react"
import foodImg from "../../assets/food-cover-img.png";
import calIcon from "../../assets/icons/calories-icon.png";
import cookingClockIcon from "../../assets/icons/cookling-time-icon.png";
const RecipeInfoContainer: React.FC = () => {
    return (
      <div className="sm:flex sm:flex-row grid grid-cols-1 gap-5 mx-5">
        {/* left container */}
        <div className="mx-auto   sm:w-[70%] ">
          <img
            src={foodImg}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        {/* right container */}
        <div className="w-full flex flex-col justify-center ">
          <div className=" w-full">
            <h1 className="medium-heading">Beef with eggs salad and soup</h1>
            {/* food calories and time to cook */}
            <div className="flex flex-row w-full    sm:mt-5 items-center">
              <img className="sm:h-[50px] h-[35px]" src={calIcon} />
              <p className="sm:text-2xl text-xs">390 cal</p>
              {/* vertical divider */}
              <div className="sm:h-[50px] h-[35px]  mx-5  border"></div>
              {/* cooking time */}
              <img className="sm:h-[50px] h-[35px]" src={cookingClockIcon} />
              <p className="sm:text-2xl text-xs">45 min</p>
            </div>
          </div>
          {/* description container */}
          <div className="mt-5">
            <p>
              {" "}
              Spiced ground beef, squeaky Cotija, fresh cilantro and a
              lime-spiked slaw… this bold burger may have been a taco in a
              previous life. Focus more Mexican-themed flavours into these
              patties with a mix of chili powder, cumin and coriander. Cooked
              until juicy, they'll shine under a colourful cabbage and carrot
              slaw, not to mention a slathering of lime-zested mayo. Serve the
              stacks with cornmeal-crusted potatoes from the oven, and dig in.
            </p>
          </div>
          {/* contain */}
          <p className="mt-2">
            <strong>Contain: </strong>Barley, Eggs, Milk, Sulphites, Wheat
          </p>
        </div>
      </div>
    );
}
export default RecipeInfoContainer