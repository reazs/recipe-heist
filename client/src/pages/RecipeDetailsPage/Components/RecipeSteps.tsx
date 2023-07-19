import React from "react";
const RecipeSteps = ({ method: methods }: { method: string[] }) => {
  return (
    <div className=" py-6 mx-5 ">
      <div className=" sm:text-xl font-['Josefin Sans']">
        {methods.map((method, index) => {
          return (
            <p key={method.slice(0, 5) + index} className="mb-7 leading-8">
              <strong className="font-['Montserrat']  text-red-400 sm:text-2xl">
                Step {index + 1}.{" "}
              </strong>
              {method}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default RecipeSteps;
