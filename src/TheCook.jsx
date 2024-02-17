const TheCook = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, #2f5fc7 10%, #2f5fc7 90%, #0f7a60 90%, #0f7a60 100%)",
      }}
      className="lg:w-full flex justify-center"
    >
      <div className=" w-[85%]  max-w-[1920px]">
        <div className="lg:flex lg:items-center ">
          <LeftSide />

          <RightSide />
        </div>
      </div>
    </section>
  );
};

const LeftSide = () => {
  return (
    <div>
      <img
        className="lg:w-[1000px] lg:h-[591px] w-[420px] h-[384px] object-cover rounded-md"
        src="cook.jpg"
        alt=""
      />
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="flex text-white lg:px-14 flex-col gap-6">
      <h1 className="lg:text-[56px] text-[40px] font-bold lg:max-w-[300px]">
        Meet the cook
      </h1>
      <p className="lg:text-[24px] text-[20px]">Sharon Daniels</p>
      <p className="text-[16px] lg:max-w-[350px]">
        Sharon is a passionate home chef with a focus on simplicity. She crafts
        easy-to-follow recipes that transform everyday ingredients into
        delicious creations.
      </p>
      <button className="border border-white rounded-md max-w-[130px] py-3 px-6 cursor-pointer hover:bg-white hover:text-[#2f5fc7] ">
        ABOUT ME
      </button>
    </div>
  );
};

export default TheCook;
