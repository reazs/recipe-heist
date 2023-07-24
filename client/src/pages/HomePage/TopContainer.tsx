import React, { useRef, useEffect, useState } from "react";
import HomeSubImage from "./components/HomeSubImage";
import HomeHeadingTitle from "./components/HomeHeadingTitle";
import { Reveal } from "../../animations/Reveal";
import foodCoverImg from "../../assets/food-cover-img.png";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import friedEggplantEgg from "../../assets/images/fried-eggplant-egg.jpeg";
import stakeVegetables from "../../assets/images/stakea-vegetables.jpeg";
import arrowRightUpIcon from "../../assets/icons/arrow-right-up.png";
import lemon from "../../assets/images/lemon.png";
import lemonade from "../../assets/images/lemonade.png";
import { useNavigate } from "react-router-dom";
const TopContainer: React.FC = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [starHover, setStarHover] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const searchContainer = document.getElementById(
      "search-container"
    ) as HTMLDivElement;

    if (inputFocus) {
      if (searchContainer) {
        searchContainer.classList.add("border-black");
      }
    } else {
      searchContainer.classList.remove("border-black");
    }
  }, [inputFocus]);
  return (
    <div className=" max-w-screen-xl  mt-20 mx-auto">
      <div className="mx-10 ">
        <div className="lg:flex lg:flex-row grid ">
          {/* left container */}
          <div className=" w-[70%] lg:mx-0 mx-auto">
            <div className="flex flex-row justify-center items-center h-full">
              <div>
                <Reveal color="white">
                  <HomeHeadingTitle />
                </Reveal>
                <div className="mt-5">
                  <p>
                    Overall, "Creating Delicious Dishes" is an essential
                    resource for anyone looking to start a food business or take
                    their culinary skills to the next level.
                  </p>
                </div>
                {/* search bar for finding food */}
                <div
                  id="search-container"
                  className="mt-10 p-4 border rounded-full shadow-md flex flex-row"
                >
                  <input
                    onFocus={() => {
                      setInputFocus(!inputFocus);
                    }}
                    onChange={(event) => {
                      const { value } = event.target;
                      setQuery(value);
                    }}
                    onBlur={() => {
                      setInputFocus(!inputFocus);
                    }}
                    placeholder="Find Great Food"
                    className=" w-full  focus:outline-none text-center"
                  />
                  <div
                    style={{
                      backgroundColor: inputFocus ? "black" : "gray",
                    }}
                    className="h-[40px] w-[45px] flex flex-row justify-center cursor-pointer items-center text-white rounded-full"
                  >
                    <i
                      onClick={() => {
                        navigate("/search/" + query);
                      }}
                      className="fa-solid fa-magnifying-glass text-2xl"
                    ></i>
                  </div>
                </div>
                <div className="flex flex-row  items-end border-b-4">
                  <img className=" w-[40%] h-[40%]" src={lemon} />
                  <img className=" w-[60%] h-[60%]" src={lemonade} />
                </div>
              </div>
            </div>
          </div>
          {/* right container */}
          <div className="lg:ml-10 w-full lg:mt-0 mt-10">
            <div
              style={{
                backgroundImage: `URL("${foodCoverImg}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="md:h-[500px] h-[300px] rounded-xl "
            >
              {" "}
              <div className="p-3">
                <div className="inline-block">
                  <div
                    onMouseEnter={() => {
                      setStarHover(!starHover);
                    }}
                    onMouseLeave={() => {
                      setStarHover(!starHover);
                    }}
                    className="flex flex-row"
                  >
                    <div className="p-2 bg-white cursor-pointer inline-block rounded-md">
                      <i className="fa-solid fa-star text-2xl text-orange-400"></i>
                    </div>
                    {starHover && (
                      <m.div
                        initial={{
                          opacity: 0,
                          x: -30,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{ duration: 0.6 }}
                        className="ml-3 rounded-full py-2 px-5 backdrop-blur-sm bg-white bg-opacity-70"
                      >
                        <div className="flex flex-row justify-center items-center">
                          <p className="lg:text-xl overflow-hidden line-clamp-2 sm:text-sm text-xs font-['Josefin Sans']">
                            Show Top Rated Recipes
                          </p>
                          <Link to="/recipes">
                            <img
                              className="h-[30px] w-[30px] ml-2 inline-block p-2 bg-white rounded-full"
                              src={arrowRightUpIcon}
                            />
                          </Link>
                        </div>
                      </m.div>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:h-[90%] h-[80%] flex flex-row justify-start items-end">
                <div
                  id="glass-container"
                  className="py-3 px-5 backdrop-filter backdrop-blur-sm  bg-black  bg-opacity-70 w-full rounded-bl-md rounded-br-md"
                >
                  <h2 className=" text-white  line-clamp-2 medium-heading">
                    Savor Healthy Eats - Keep it Casual and Easy-Going!
                  </h2>
                </div>
              </div>
            </div>
            {/* sub image */}
            <div className="grid grid-cols-2 gap-3 lg:mt-10 mt-5 ">
              {/* left image */}
              <HomeSubImage
                img={friedEggplantEgg}
                title="Fried Eggplant with Eggs"
              />
              {/* right image */}
              <HomeSubImage
                img={stakeVegetables}
                title="A dish of a big medium rare meat stake and vegetables"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
