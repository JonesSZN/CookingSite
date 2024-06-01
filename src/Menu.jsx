import { UserIcon } from "lucide-react";

const Menu = () => {
  const MenuObjects = [
    {
      servings: 4,
      prepTime: 10,
      cookTime: 20,
      dishName: "Yoghurt Stuffed Eggplant",
      image: "salad2.jpg",
      tags: ["VEGAN", "LUNCH"],
    },

    {
      servings: 4,
      prepTime: 15,
      cookTime: 20,
      dishName: "Fluffy Pecan Waffles",
      image: "waffles.jpg",
      tags: ["BREAKFAST", "DESSERT"],
    },

    {
      servings: 8,
      prepTime: 20,
      cookTime: 40,
      dishName: "Cozy Weekend Chili",
      image: "pot1.jpeg",
      tags: ["LUNCH", "DINNER"],
    },
    {
      servings: 8,
      prepTime: 10,
      cookTime: 30,
      dishName: "Cinnamon Rolls",
      image: "cinnamon.jpg",
      tags: ["DESSERT", "BREAKFAST"],
    },
    {
      servings: 6,
      prepTime: 20,
      cookTime: 30,
      dishName: "Roasted Butternut Squash Soup",
      image: "soup.jpeg",
      tags: ["DINNER", "LUNCH"],
    },
    {
      servings: 4,
      prepTime: 10,
      cookTime: 0,
      dishName: "Watermelon Shrimp Summer Salad",
      image: "salad1.jpg",
      tags: ["SNACK", "LUNCH"],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center gap-8 justify-center py-24">
      <div className="w-[85%] lg:max-w-[1920px] flex flex-col gap-8 ">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-[40px]">
          {MenuObjects.map((item) => (
            <div>
              <MenuCard foodObject={item} />
            </div>
          ))}
        </div>
      </div>
      <button class="border font-bold text-[14px] lg:max-w-[202px] py-3 px-6 border-[#0f7a60] text-[#0f7a60] rounded-md  cursor-pointer hover:bg-[#0f7a60] hover:text-white ">
        VIEW ALL RECIPES
      </button>
    </section>
  );
};

const MenuCard = ({ foodObject }) => {
  const childrenToRender = [
    <p className="text-[14px]">{foodObject.servings} servings</p>,
    <p className="text-[14px]">{foodObject.prepTime} min Preptime </p>,
    <p className="text-[14px]">{foodObject.cookTime} cooktime</p>,
  ];
  return (
    <div className="flex flex-col group cursor-pointer relative gap-3">
      <img
        className="lg:h-[594px] h-[208px] object-cover rounded-md"
        src={foodObject.image}
        alt=""
      />
      <div className="lg:absolute lg:right-2 lg:top-3 absolute right-0 flex gap-2 items-center">
        {foodObject.tags.map((tag) => (
          <div className="text-black group-hover:bg-[#0f7a60] group-hover:text-white duration-500 bg-white rounded-md lg:py-2 lg:px-3 py-1 px-2">
            {tag}
          </div>
        ))}
      </div>

      <div className="lg:flex lg:flex-row flex flex-col gap-2 ">
        {childrenToRender.map((child) => (
          <div className="flex text-[#0f7a60] gap-2 items-center py-[4px] px-2 rounded-md border border-[#0f7a60]">
            <UserIcon size="16px" />
            {child}
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[#292929] font-bold">
        {foodObject.dishName}
      </p>
    </div>
  );
};

export default Menu;
