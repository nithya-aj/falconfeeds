const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-1.5 pl-0 xs:pl-4 sm:pl-0">
      <div className="flex items-center gap-7 xs:hidden">
        <div className="w-3 h-3 rounded-full border-2 border-[#8B95F8]"></div>
        <p className="text-[#737373] text-sm">
          {" "}
          Dashboard / <span className="text-[#E5E5E5]">overview</span>{" "}
        </p>
      </div>
      <h1 className=" text-[#262626] font-bold text-[34px]  lg:text-4xl xl:text-5xl xs:pt-0 pt-8">
        Hi Murdock,
      </h1>
      <p className="font-normal text-base text-[#717171]">
        Here’s your summary for the day
      </p>
    </div>
  );
};

export default Dashboard;
