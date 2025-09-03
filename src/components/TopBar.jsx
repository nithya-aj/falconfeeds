import { useEffect, useRef, useState } from "react";
import logo from "../assets/falconfeeds-logo.svg";
import { MdOutlineDiamond } from "react-icons/md";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="flex items-center justify-between uppercase py-8 px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-28 ">
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
        <div className="relative" ref={dropdownRef}>
          <div
            className="h-9 w-9 rounded-full bg-[#16A374] text-[#145340] flex items-center justify-center font-bold text-xl cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            M
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
