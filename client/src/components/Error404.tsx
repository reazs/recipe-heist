import react from "react";

import Error404Img from "../assets/images/Error404-img.jpg";
const Error404: react.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-[70vh] w-[70vw] ">
        <img className="h-full w-full object-contain" src={Error404Img} />
      </div>
    </>
  );
};

export default Error404;
