const HomeSubImage = ({ img, title }: { img: string; title: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[220px] rounded-md"
    >
      <div className="h-full flex flex-row justify-start items-end">
        <div className="p-3 w-full backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-br-md rounded-bl-md bg-black">
          <p className="text-white line-clamp-2">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSubImage;
