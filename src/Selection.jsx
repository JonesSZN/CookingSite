const Selection = () => {
  const ArrayLinks = [
    "Breakfast",
    "Dessert",
    "Dinner",
    "Lunch",
    "Snack",
    "Vegan",
  ];
  return (
    <section className="w-full flex justify-center py-12">
      <div className="w-[65%] max-w-[1920px]">
        <div className="flex flex-col gap-4  relative ">
          <div className="  lg:absolute  lg:right-0 lg:bottom-0 ">
            <img
              className="rounded-t-[200px] rounded-b-[15px] w-[342px] h-[240px] lg:w-[494px] lg:h-[480px] object-cover"
              src="salad1.jpg"
              alt=""
            />
          </div>
          <div className=" flex gap-4 flex-wrap min-w-[400px]  lg:max-w-[600px]">
            {ArrayLinks.map((item) => (
              <Links food={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Links = ({ food }) => {
  return (
    <a
      className="text-[#0f7a60] font-bold  hover:underline text-[32px] lg:text-[40px]"
      href="www.youtube.com"
    >
      {food}
    </a>
  );
};

export default Selection;
