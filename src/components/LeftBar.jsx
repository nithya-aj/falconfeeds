import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { MdOutlineNearbyError } from "react-icons/md";
import { MdEmojiFlags } from "react-icons/md";

const LeftBar = () => {
  return (
    <>
      <ul className="hidden xs:flex w-[22%] sm:w-1/6 md:w-[13%] h-ful flex-col items-center gap-4 uppercase">
        <li className="flex flex-col items-center justify-center gap-2.5 text-[10px] text-[#A5B4FC] p-4 bg-[#17171F] rounded-[14px] cursor-pointer hover:bg-[#17171F]">
          <MdOutlineDashboard size={24} />
          <p>overview</p>
        </li>
        <li className="flex flex-col items-center justify-center gap-2.5 text-[10px] text-[#C7D2FE] p-4  rounded-[14px] cursor-pointer hover:bg-[#17171F]">
          <MdOutlineLibraryBooks size={24} />
          <p>all feeds</p>
        </li>
        <li className="flex flex-col items-center justify-center gap-2.5 text-[10px] text-[#C7D2FE] p-4  rounded-[14px] cursor-pointer hover:bg-[#17171F]">
          <MdOutlineContacts size={24} />
          <p>profiles</p>
        </li>
        <li className="flex flex-col items-center justify-center gap-2.5 text-[10px] text-[#C7D2FE] p-4  rounded-[14px] cursor-pointer hover:bg-[#17171F]">
          <MdOutlineNearbyError size={24} />
          <p>incidents</p>
        </li>
        <li className="flex flex-col items-center justify-center gap-2.5 text-[10px] text-[#C7D2FE] p-4  rounded-[14px] cursor-pointer hover:bg-[#17171F]">
          <MdEmojiFlags size={24} />
          <p>campaigns</p>
        </li>
      </ul>
      {/* for mobile devices */}
      <ul className="xs:hidden flex gap-3 items-center text-xs text-[#F5F5F5] mb-6">
        <li className="flex items-center justify-center gap-2.5 text-[10px] text-[#C7D2FE] py-1.5 px-4 rounded-sm cursor-pointer hover:bg-[#17171F] bg-[#4A3FD1]">
          <MdOutlineDashboard size={20} />
          <p>overview</p>
        </li>
        <li className="flex items-center justify-center gap-2.5 text-[10px] text-[#C7D2FE] py-1.5 px-4 rounded-sm cursor-pointer hover:bg-[#17171F] bg-[#17171F]">
          <MdOutlineLibraryBooks size={20} />
          <p>all feeds</p>
        </li>
        <li className="flex items-center justify-center gap-2.5 text-[10px] text-[#C7D2FE] py-1.5 px-4 rounded-sm cursor-pointer hover:bg-[#17171F] bg-[#17171F]">
          <MdOutlineContacts size={20} />
          <p>profiles</p>
        </li>
      </ul>
    </>
  );
};

export default LeftBar;
