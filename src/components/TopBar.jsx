import logo from "../assets/falconfeeds-logo.svg";
import { MdOutlineDiamond } from "react-icons/md";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdOutlineHistoryEdu } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between uppercase py-8 px-10 md:px-12 lg:px-16 xl:px-20">
      <div className="flex items-center md:gap-12 lg:gap-20">
        <img src={logo} alt="" className="h-auto lg:h-8" />
        <div className="items-center gap-7 hidden lg:flex ">
          <div className="w-3 h-3 rounded-full border-2 border-[#8B95F8]"></div>
          <p className="text-[#737373] text-sm">
            {" "}
            Dashboard / <span className="text-[#E5E5E5]">overview</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 lg:gap-7">
        <div className="flex items-center gap-2 xs:gap-4 text-[#FCD34D] font-semibold text-xs bg-[#1F1D17] py-1.5 px-3 rounded-sm cursor-pointer">
          <MdOutlineDiamond size={14} />
          <p>UPGRADE TO PREMIUM</p>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[#E5E5E5] font-medium text-sm cursor-pointer">
          <MdOutlineHelpCenter size={18} />
          <p>HELP CENTER</p>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[#E5E5E5] font-medium text-sm cursor-pointer">
          <MdOutlineHistoryEdu size={18} />
          <p>FEEDBACK</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-[#16A374] text-[#145340] flex items-center justify-center font-bold text-xl cursor-pointer">
          M
        </div>
      </div>
    </div>
  );
};

export default TopBar;
