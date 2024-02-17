const Inbox = () => {
  return (
    <section className="w-full flex justify-center py-12 bg-[#fff26f]">
      <div className="w-[85%] max-w-[1920px]">
        <div className="lg:flex lg:items-center gap-8">
          <Left />
          <Right />
        </div>
      </div>
    </section>
  );
};

const Left = () => {
  return (
    <p className="text-[#2f5fc7] font-bold text-[40px] lg:text-[56px] max-w-[700px]">
      Want more recipes straight to your inbox?
    </p>
  );
};

const Right = () => {
  return (
    <form className="flex flex-col lg:p-0 py-12 gap-4 text-[#2f5fc7] lg:w-[70%]">
      <p className="lg:text-[24px] text-[20px] ">Sign up for the newsletter.</p>
      <input
        className="rounded-md py-3 px-4 border outline-none border-b-[#2f5fc7] "
        type="text"
        placeholder="Enter your email"
      />
      <button className="py-3 px-6 border hover:bg-[#2f5fc7] hover:text-white border-[#2f5fc7] lg:max-w-[110px] rounded-md">
        SUBMIT
      </button>
    </form>
  );
};

export default Inbox;
