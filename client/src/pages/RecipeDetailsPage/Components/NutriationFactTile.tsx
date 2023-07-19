const NutriationFactTile = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="sm:text-xl  text-xs font-['Montserrat'] mb-2  border-b-2 shadow-sm py-2 px-5 flex flex-row justify-between items-center ">
      <p className=" text-gray-500 py-1 ">{title}</p>
      <strong className=" ">{value}</strong>
    </div>
  );
};
export default NutriationFactTile;
