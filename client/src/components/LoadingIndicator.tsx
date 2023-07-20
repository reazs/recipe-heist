import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import CookingLoading from "../assets/lottieFile/cooking-loading.json";
const LoadinIndicator: React.FC = () => {
  return (
    <div className="h-[90vh] w-[100vw]">
      <div className="h-full flex flex-row justify-center items-center">
        <Player
          className="w-[200px]"
          src={CookingLoading}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default LoadinIndicator;
