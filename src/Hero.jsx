import { ArrowLeft, ArrowRight, UserIcon, Clock } from "lucide-react";

const HeroCard = ({ image, h2, time }) => {
  return (
    <div className="border border-white rounded-md flex gap-2 items-center py-2 px-4 text-white cursor-pointer">
      {image}
      <div className="flex flex-col">
        <h2 className="text-[8px]">{h2}</h2>
        <p className="text-[14px]">{time}</p>
      </div>
    </div>
  );
};

const Hero = () => {
  const HeroObject = [
    {
      image: <UserIcon />,
      h2: "SERVINGS",
      time: "8 servings",
    },
    {
      image: <Clock />,
      h2: "PREP",
      time: "20 min prep",
    },
    {
      image: <Clock />,
      h2: "PREP",
      time: "40 min cook",
    },
  ];
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #fbf5f1 0%, #fbf5f1 90%, rgba(255,255,255,1) 90%)",
      }}
      className="w-full max-w-[1920px] relative flex justify-center "
    >
      <div className="lg:flex w-full lg:flex-row flex flex-col-reverse">
        {/* left */}
        <div className="flex lg:py-0 lg:p-[7.5%] pt-14 pb-44 w-full px-9 lg:w-1/2  flex-col justify-center gap-6 ">
          <h1 className="text-[#2f5fc7] text-[48px] lg:text-[72px] font-bold">
            Let's get <br /> cooking
          </h1>
          <p className="text-[#2f5fc7] text-[16px] lg:text-[24px] max-w-[300px] lg:max-w-[650px] font-bold">
            A blog full of easy to make recipes that take the stress of cooking.
          </p>
          <button className="border font-bold text-[14px] max-w-[202px] py-3 px-6 border-[#2f5fc7] text-[#2f5fc7] rounded-md  cursor-pointer hover:bg-[#2f5fc7] hover:text-white ">
            VIEW ALL RECIPES
          </button>
        </div>

        {/* right */}
        <div className="relative bg-black w-full lg:w-1/2 ">
          <img
            className="w-full brightness-90   h-[640px] object-cover rounded-bl-[3px] "
            src="pot1.jpeg"
            alt=""
          />
          <div className="absolute bottom-11 left-12 flex flex-col gap-6">
            <Buttons />

            <p className="text-white text-[40px]">Cozy Weekend Chilli</p>
            <div className="flex flex-row gap-2 items-center">
              {HeroObject.map((item) => (
                <HeroCard image={item.image} h2={item.h2} time={item.time} />
              ))}
            </div>
            <div className="  flex  gap-2 items-center">
              <div className="flex items-center rounded-md cursor-pointer justify-center bg-white  p-1">
                <ArrowLeft color="black" />
              </div>
              <div className="flex items-center rounded-md cursor-pointer justify-center bg-white  p-1">
                <ArrowRight color="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="  flex  gap-2 items-center">
      <div className="bg-white rounded-md py-1 px-3 text-black cursor-pointer">
        DINNER
      </div>
      <div className="bg-white rounded-md py-1 px-3 cursor-pointer text-black">
        LUNCH
      </div>
    </div>
  );
};

export default Hero;
