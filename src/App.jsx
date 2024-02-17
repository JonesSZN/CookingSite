import { ArrowLeft, ArrowRight } from "lucide-react";
import Hero from "./Hero";
import Header from "./Header";
import Menu from "./Menu";
import TheCook from "./TheCook";
import Mood from "./mood";
import Selection from "./Selection";
import Blog from "./blog";
import Foods from "./Foods";
import Inbox from "./inbox";
import Footer from "./Footer";

const Recipe = () => {
  const RecipeObjets = [
    {
      Name: "Breakfast",
      image: "Cinnamon.jpg",
      color: "#0f7a60",
    },
    {
      Name: "Dessert",
      image: "waffles.jpg",
      color: "#0f7a60",
    },
    {
      Name: "Dinner",
      image: "pot1.jpeg",
      color: "#0f7a60",
    },
    {
      Name: "Lunch",
      image: "salad1.jpg",
      color: "#0f7a60",
    },
    {
      Name: "Snack",
      image: "avocado.jpg",
      color: "#0f7a60",
    },
    {
      Name: "Vegan",
      image: "salad2.jpg",
      color: "#0f7a60",
    },
  ];
  return (
    <section className="w-full max-w-[1920px] flex justify-center py-24">
      <div className="lg:w-[85%] max-w-[1920px]">
        <div className="flex flex-col gap-8">
          <div className="lg:flex lg:block  justify-between items-center">
            <p className="text-[#0f7a60] text-[40px] lg:text-[56px] font-bold">
              Recipes by category
            </p>
            <div className=" lg:flex hidden gap-2 items-center">
              <div className="flex items-center rounded-md cursor-pointer justify-center bg-white border border-[#0f7a60] p-1">
                <ArrowLeft color="#0f7a60" />
              </div>
              <div className="flex items-center rounded-md cursor-pointer justify-center bg-white border border-[#0f7a60] p-1">
                <ArrowRight color="#0f7a60" />
              </div>
            </div>
          </div>
          <div className="w-screen overflow-x-auto">
            <div className="flex gap-9 items-center">
              {RecipeObjets.map((item) => (
                <RecipeCard
                  Name={item.Name}
                  color={item.color}
                  image={item.image}
                />
              ))}
            </div>
          </div>
          <div className=" lg:hidden  mx-auto flex  gap-2 items-center">
            <div className="flex items-center rounded-md cursor-pointer justify-center bg-white border border-[#0f7a60] p-1">
              <ArrowLeft color="#0f7a60" />
            </div>
            <div className="flex items-center rounded-md cursor-pointer justify-center bg-white border border-[#0f7a60] p-1">
              <ArrowRight color="#0f7a60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const RecipeCard = ({ Name, image, color }) => {
  return (
    <div className="flex flex-col cursor-pointer hover:translate-x-1 duration-500 transition-all gap-2 p-3 shrink-0 w-[216px] h-[252px] bg-[#fbf5f1] items-center justify-center rounded-md">
      <img
        className="rounded-md w-[192px] h-[192px] object-cover "
        src={image}
        alt=""
      />
      <p
        className="font-bold text-[20px]"
        style={{
          color: color,
        }}
      >
        {Name}
      </p>
    </div>
  );
};

const NewestRecipes = () => {
  return (
    <section className="w-full bg-[#0f7a60] flex justify-center py-24">
      <div className="w-[85%] max-w-[1920px]">
        <p className="text-[#fbf5f1] text-[56px]">Newest recipes</p>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="w-screen h-screen flex items-center flex-col ">
      <Header />
      <Hero />
      <Recipe />
      <NewestRecipes />
      <Menu />
      <TheCook />
      <Mood />
      <Selection />
      <Blog />
      <Foods />
      <Inbox />
      <Footer />
    </div>
  );
}
export default App;
