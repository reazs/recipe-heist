import calIcon from "../../assets/icons/calories-icon.png";
import cookingClockIcon from "../../assets/icons/cookling-time-icon.png";
const RecipeInfoContainer = ({
  Name,
  Description,
  calories,
  cookTime,
  img_url,
  Author,
}: {
  img_url: string;
  Name: string;
  Description: string;
  calories: string;
  cookTime: string;
  Author: string;
}) => {
  return (
    <div className="sm:flex sm:flex-row grid grid-cols-1 gap-5 mx-5">
      {/* left container */}
      <div className="mx-auto   sm:w-[70%] ">
        <img
          src={img_url}
          className="w-full h-full rounded-lg object-cover shadow-md"
        />
      </div>
      {/* right container */}
      <div className="w-full flex flex-col justify-center ">
        <div className=" w-full">
          <h1 className="medium-heading">{Name}</h1>
          {/* food calories and time to cook */}
          <div className="flex flex-row w-full    sm:mt-5 items-center">
            <img className="sm:h-[50px] h-[35px]" src={calIcon} />
            <p className="sm:text-2xl text-xs">{calories}</p>
            {/* vertical divider */}
            <div className="sm:h-[50px] h-[35px]  mx-5  border"></div>
            {/* cooking time */}
            <img className="sm:h-[50px] h-[35px]" src={cookingClockIcon} />
            <p className="sm:text-2xl text-xs">{cookTime}</p>
          </div>
        </div>
        {/* description container */}
        <div className="mt-5">
          <p> {Description}</p>
        </div>
        {/* contain */}
        <p className="mt-2">
          <strong>Author: </strong>
          {Author}
        </p>
      </div>
    </div>
  );
};
export default RecipeInfoContainer;
