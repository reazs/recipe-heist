import React from "react";
import simleFace from "../../../assets/smile-face.png";
const HomeHeadingTitle: React.FC = () => {
  return (
    <>
      <div className="">
        <h1 className="ml-10 big-heading font-['Monsterrat']">Fresh Food</h1>
        <div className="flex flex-row ">
          <h1 className="sm:text-[2.5rem] text-[1.5rem] font-['Cookie'] leading-[0] text-green-400 ">
            With
          </h1>
          <div>
            <h1 className="ml-2 leading-[0.5] big-heading font-['Josefin-Sans']">
              Great Taste
            </h1>
            <div className="flex  flex-row justify-end h-10 w-full">
              <img src={simleFace} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeadingTitle;
