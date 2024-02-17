import { Facebook, Instagram, X, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2f5fc7] flex justify-center py-16">
      <div className="w-[85%] max-w-[1920px] flex flex-col gap-8 ">
        <img
          className="mx-auto cursor-pointer w-[480px]"
          src="logo2.svg"
          alt=""
        />
        <div className="flex flex-col gap-6">
          <Top />
          <Bottom />
        </div>
      </div>
    </footer>
  );
};

const Top = () => {
  return (
    <div className="lg:flex lg:justify-between items-center">
      <div className="flex gap-4 items-center justify-center text-white text-[20px] font-bold">
        <a href="www.yt">About</a>
        <a href="www.yt">Blog</a>
        <a href="www.yt">Contact</a>
      </div>
      <div className="flex gap-4 lg:py-0 py-4 items-center justify-center cursor-pointer">
        <Facebook color="white" />
        <Instagram color="white" />
        <X color="white" />
        <LinkedinIcon color="white" />
      </div>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="lg:flex lg:justify-between items-center">
      <div className="lg:flex gap-4 text-center text-white">
        <a href="www.yt">Style Guide.</a>
        <a href="www.yt">Changelog.</a>
        <a href="www.yt">Licenses.</a>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-white text-center lg:py-0 py-4 ">
          Website template by Callisto Digital Studio. Powered by Webflow.
        </p>
      </div>
    </div>
  );
};

export default Footer;
