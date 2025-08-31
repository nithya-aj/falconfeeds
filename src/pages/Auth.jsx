import { useState } from "react";
import logo from "../assets/falconfeeds-logo.svg";
import verified_tick from "../assets/verified-tick.svg";
import technisanct from "../assets/technisanct.svg";
import google_logo from "../assets/google-logo.svg";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#0A0A0B] text-[#E5E5E5] h-screen w-full flex">
      {/* Left section */}
      <div className="w-3/5 place-items-center py-6">
        <div className="w-3/5 h-full flex flex-col items-start justify-around ">
          <div className="flex items-center gap-5">
            <img src={logo} alt="falconfeeds logo" />
            <p className="font-semibold text-4xl uppercase satoshi">
              falconfeeds
              <span className="text-[#EB2323]">.</span>io
            </p>
          </div>
          <h1 className="font-bold text-5xl leading-14 text-[#D4D4D4] public-sans">
            Hunt, Identify and <br />
            <span className="text-[#16A374]"> Act</span> on{" "}
            <span className="text-[#EB2F2F]"> threats</span> before <br />
            they can harm you<span className="text-[#EB2F2F]">.</span>
          </h1>
          <ul className="flex flex-col items-start text-[#B6B6B6] gap-3">
            <li>
              <div className="flex items-center gap-4 font-normal text-[20px]">
                <img src={verified_tick} alt="verified tick image" />
                <p>Comprehensive threat actor directory</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4 font-normal text-[20px]">
                <img src={verified_tick} alt="verified tick image" />
                <p>Constantly updated threat feeds</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4 font-normal text-[20px]">
                <img src={verified_tick} alt="verified tick image" />
                <p>Safe source for tracking threat actors and campaigns</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4 font-normal text-[20px]">
                <img src={verified_tick} alt="verified tick image" />
                <p>Data funnelled from all parts of the internet</p>
              </div>
            </li>
          </ul>
          <div className="flex flex-col items-start text-[#B6B6B6]">
            <p>Powered by</p>
            <img src={technisanct} alt="powered by technisanct img" />
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className="w-2/5 bg-[#171717]">
        {isLogin ? (
          <form className="w-full h-full place-items-center">
            <div className="w-2/3 h-full flex flex-col items-center justify-center gap-6">
              <h2 className="text-[#E5E5E5] font-bold text-[28px] self-start">
                Sign in
              </h2>
              <p className="text-[#737373] text-[16px] self-start">
                View latest updates and developments in CTI
              </p>
              <div className="relative w-full">
                <input
                  type="text"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                  placeholder=""
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                  placeholder=""
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? (
                    <MdOutlineVisibilityOff size={18} />
                  ) : (
                    <MdOutlineVisibility size={18} />
                  )}
                </button>
              </div>
              <p className="font-medium text-sm text-[#16A374] self-start">
                Forgot password?
              </p>
              <button
                type="submit"
                className="h-[44px] w-full bg-[#16A374] text-[#FAFAFA] text-[16px] flex items-center justify-center rounded-sm cursor-pointer"
              >
                Sign in
              </button>
              <div className="flex gap-2.5 items-center w-full text-[#E5E5E5] text-xs px-8">
                <div className="border border-[#262626] w-1/2"></div> or{" "}
                <div className="border border-[#262626] w-1/2"></div>
              </div>
              <button className="bg-[#4285F4] rounded-[3px] p-1 flex items-center h-[46px] gap-6 w-3/5 cursor-pointer">
                <img src={google_logo} alt="google logo" />
                <p className="font-medium text-sm text-[#FFFFFF]">
                  Continue with Google
                </p>
              </button>
              <p className="font-normal text-[16px] text-[#E5E5E5]">
                Don’t have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-[#16A374] cursor-pointer"
                >
                  {" "}
                  Sign up
                </span>
              </p>
            </div>
          </form>
        ) : (
          <form className="w-full h-full place-items-center">
            <div className="w-2/3 h-full flex flex-col items-center justify-center gap-6">
              <h2 className="text-[#E5E5E5] font-bold text-[28px] self-start">
                Sign up for free
              </h2>
              <p className="text-[#737373] text-[16px] self-start">
                Get started right away, no credit card required!
              </p>
              <div className="flex items-center gap-7 w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="first_name"
                    className="block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                    placeholder=""
                  />
                  <label
                    htmlFor="first_name"
                    className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    First name
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="last_name"
                    className="block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                    placeholder=""
                  />
                  <label
                    htmlFor="last_name"
                    className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                  placeholder=""
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                  placeholder=""
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? (
                    <MdOutlineVisibilityOff size={18} />
                  ) : (
                    <MdOutlineVisibility size={18} />
                  )}
                </button>
              </div>
              <div className="flex items-start gap-1">
                <input
                  defaultChecked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 rounded-xs accent-[#16A374] border-gray-300 focus:ring-[#16A374]"
                />
                <label
                  for="checked-checkbox"
                  className="ms-2 text-sm font-medium text-[#E5E5E5]"
                >
                  Creating an account means you’re okay with our{" "}
                  <span className="text-[#7C7CF7]"> Terms of Service </span> and{" "}
                  <span className="text-[#7C7CF7]">Privacy Policy </span>
                </label>
              </div>
              <button
                type="submit"
                className="h-[44px] w-full bg-[#16A374] text-[#FAFAFA] text-[16px] flex items-center justify-center rounded-sm cursor-pointer"
              >
                Create Account
              </button>
              <div className="flex gap-2.5 items-center w-full text-[#E5E5E5] text-xs px-8">
                <div className="border border-[#262626] w-1/2"></div> or{" "}
                <div className="border border-[#262626] w-1/2"></div>
              </div>
              <button className="bg-[#4285F4] rounded-[3px] p-1 flex items-center h-[46px] gap-6 w-3/5 cursor-pointer">
                <img src={google_logo} alt="google logo" />
                <p className="font-medium text-sm text-[#FFFFFF]">
                  Continue with Google
                </p>
              </button>
              <p className="font-normal text-[16px] text-[#E5E5E5]">
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-[#16A374] cursor-pointer"
                >
                  Sign in
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
