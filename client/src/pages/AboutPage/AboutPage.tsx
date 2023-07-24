import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import CheifCooking from "../../assets/lottieFile/cheif-cooking.json";
import Utils from "../../utils/Utils";
import LoadinIndicator from "../../components/LoadingIndicator";
const AboutPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handlePageLoading = async () => {
    await Utils.delay(500);
    setIsLoading(false);
  };
  useEffect(() => {
    handlePageLoading();
  });

  return (
    <>
      {isLoading ? (
        <LoadinIndicator />
      ) : (
        <div>
          <div className="h-[90vh] max-w-screen-lg mx-auto">
            <div className="sm:mx-8 mx-5">
              <div className="max-h-[400px] max-w-[400px] mx-auto">
                <Player
                  className="object-cover"
                  src={CheifCooking}
                  autoplay={true}
                  loop={true}
                />
              </div>
              {/* about description */}
              <div>
                <h3 className="sm:text-4xl text-3xl font-['Josefin Sans'] font-medium">
                  About Us
                </h3>
                <p className="sm:text-xl  text-[18px] mt-5">
                  At Recipe Heist, we pride ourselves on curating a diverse
                  collection of recipes that cater to various tastes,
                  preferences, and dietary requirements. From hearty main
                  courses to delectable desserts, we have a recipe for every
                  occasion and craving. Our extensive library covers cuisines
                  from around the world, allowing you to embark on a culinary
                  journey without leaving your kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;
