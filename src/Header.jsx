import { Menu, Search } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full flex py-3   justify-center bg-white">
      <div className="w-[85%] max-w-[1920px]">
        <nav className="flex w-full cursor-pointer justify-between font-bold text-[#2f5fc7] items-center text-blue">
          <div className="flex gap-2 items-center">
            <Menu />
            <p>Menu</p>
          </div>
          <img
            className="lg:w-[170px] lg:h-[40px]  w-[130px] h-[40px]"
            src="logo.svg"
            alt=""
          />
          <Search />
        </nav>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-full max-w-[1920px]   flex flex-col   ">
      <div className="w-[100%] bg-[#2f5fc7] flex lg:justify-center py-4 px-4">
        <div className="w-[85%] lg:flex lg:justify-center">
          <p className="text-white text-[16px]">
            New recipes added every week!
          </p>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
