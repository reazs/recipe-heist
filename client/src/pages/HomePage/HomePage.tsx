import React, { useRef, useEffect, useState } from "react";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import Footer from "../../components/Footer";

const HomePage: React.FC = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [starHover, setStarHover] = useState(false);
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
    <>
      <div>
        <TopContainer />
        <MiddleContainer />
      </div>
    </>
  );
};
export default HomePage;
