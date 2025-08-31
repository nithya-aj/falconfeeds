import { useState } from "react";
import google_logo from "../assets/google-logo.svg";
import logo from "../assets/falconfeeds-logo.svg";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import AuthLeftSection from "../components/AuthLeftSection";
import apiRequest from "../utils/apiRequest";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [showTermsError, setShowTermsError] = useState(false);
  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const showCustomToast = (message) => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } flex items-center justify-between`}
          style={{
            width: "80%",
            padding: "0.8rem 1rem",
            borderRadius: "6px",
            border: "0.5px solid #C71E1E",
            gap: "16px",
            background: "#1A0A0ACC",
            backdropFilter: "blur(5px)",
            boxShadow: "0px 4px 8px 2px #00000066",
            opacity: 1,
            position: "absolute",
            top: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            pointerEvents: "auto",
          }}
        >
          <p className="text-base font-medium text-[#FFC7C7] flex-1">
            {message}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toast.dismiss(t.id);
            }}
            className="text-[#737373] hover:text-[#999999] font-bold cursor-pointer flex-shrink-0 p-1"
            style={{
              minWidth: "24px",
              minHeight: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "auto",
            }}
            type="button"
          >
            ✕
          </button>
        </div>
      ),
      {
        duration: 4000,
      }
    );
  };

  // Reset form when switching between login/signup
  const handleFormSwitch = (isLoginMode) => {
    setIsLogin(isLoginMode);
    reset();
    setShowTermsError(false);
  };

  const onSubmit = async (data) => {
    if (!isLogin && !acceptTerms) {
      setShowTermsError(true);
      showCustomToast(
        "Please accept the terms of service and privacy policy to create your account"
      );
      return;
    }
    setShowTermsError(false);

    try {
      const res = await apiRequest.post(
        `/auth/${isLogin ? "login" : "signup"}`,
        data
      );

      localStorage.setItem("token", res.data.data.token);
      navigate("/");
    } catch (err) {
      const msg =
        err.response?.data?.message || "Oops! Something broke at our end";
      showCustomToast(msg, "error");

      // API errors
      if (msg.toLowerCase().includes("email")) {
        setError("email", { type: "manual", message: msg });
      }
      if (msg.toLowerCase().includes("password")) {
        setError("password", { type: "manual", message: msg });
      }
      if (msg.toLowerCase().includes("unauthorized")) {
        setError("email", { type: "manual", message: msg });
        setError("password", { type: "manual", message: msg });
      }
    }
  };

  return (
    <div className="bg-[#0A0A0B] text-[#E5E5E5] h-screen w-full flex">
      {/* Left section */}
      <AuthLeftSection />
      {/* Right section */}
      <div className="w-full md:w-1/2 lg:w-2/5 sm:bg-[#171717] relative">
        <Toaster
          position="top-center"
          reverseOrder={false}
          containerStyle={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 999,
          }}
        />
        <div
          className={` ${
            isLogin ? "top-10" : "top-6"
          } flex items-center gap-5 absolute  w-4/5 xs:w-2/3 left-1/2 -translate-x-1/2 md:hidden`}
        >
          <img src={logo} alt="falconfeeds logo" className="h-8" />
          <p className="font-semibold text-[22px] uppercase satoshi">
            falconfeeds
            <span className="text-[#EB2323]">.</span>io
          </p>
        </div>
        {isLogin ? (
          <form
            key="signInForm"
            className="w-full h-full place-items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-4/5 lg:w-2/3 h-full flex flex-col items-center justify-center gap-3 md:gap-3 lg:gap-4 xl:gap-6">
              <h2 className="text-[#E5E5E5] font-bold text-2xl md:text-[23px] lg:text-2xl xl:text-[28px] self-start">
                Sign in
              </h2>
              <p className="text-[#737373] text-[16px] self-start">
                View latest updates and developments in CTI
              </p>
              <div className="relative w-full">
                <input
                  type="email"
                  id="login-email"
                  name="login-email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: emailRegex,
                      message: "Invalid email format",
                    },
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 appearance-none dark:text-white peer
                ${
                  errors.email
                    ? "border-red-500"
                    : "border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                }
              `}
                />
                <label
                  htmlFor="login-email"
                  className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="login-password"
                  name="login-password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password must be at least 8 characters with letters and numbers",
                    },
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 appearance-none dark:text-white peer
                ${
                  errors.password
                    ? "border-red-500"
                    : "border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                }
              `}
                />
                <label
                  htmlFor="login-password"
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
              <button className="bg-[#4285F4] rounded-[3px] p-1 flex items-center h-[46px] gap-6 w-3/4 xs:w-3/4 md:w-[80%] lg:w-3/4 xl:w-3/5 cursor-pointer">
                <img src={google_logo} alt="google logo" />
                <p className="font-medium text-sm text-[#FFFFFF]">
                  Continue with Google
                </p>
              </button>
              <p className="font-normal text-[16px] text-[#E5E5E5]">
                Don't have an account?{" "}
                <span
                  onClick={() => handleFormSwitch(false)}
                  className="text-[#16A374] cursor-pointer"
                >
                  {" "}
                  Sign up
                </span>
              </p>
            </div>
          </form>
        ) : (
          <form
            key="signUpForm"
            className="w-full h-full place-items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-4/5 xs:w-2/3 h-full flex flex-col items-center justify-center gap-3 md:gap-3 lg:gap-4 xl:gap-6">
              <h2 className="text-[#E5E5E5] font-bold text-2xl md:text-[23px] lg:text-2xl xl:text-[28px] self-start">
                Sign up for free
              </h2>
              <p className="text-[#737373] text-[16px] self-start">
                Get started right away, no credit card required!
              </p>
              <div className="flex items-center gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="signup-firstname"
                    name="signup-firstname"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 
                      ${
                        errors.firstName
                          ? "border-red-500"
                          : "border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                      }`}
                    placeholder=""
                  />
                  <label
                    htmlFor="signup-firstname"
                    className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    First name
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="signup-lastname"
                    name="signup-lastname"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 
                      ${
                        errors.lastName
                          ? "border-red-500"
                          : "border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                      }`}
                    placeholder=""
                  />
                  <label
                    htmlFor="signup-lastname"
                    className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="email"
                  id="signup-email"
                  name="signup-email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: emailRegex,
                      message: "Invalid email format",
                    },
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 appearance-none dark:text-white peer
                ${
                  errors.email
                    ? "border-red-500"
                    : "border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                }
              `}
                />
                <label
                  htmlFor="signup-email"
                  className="absolute text-sm text-[#737373] dark:text-[#737373] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#171717] px-2 peer-focus:px-2 peer-focus:text-[#737373] peer-focus:dark:text-[#737373] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div className="relative w-full">
                {!isLogin && showPasswordTooltip && (
                  <div className="absolute md:left-0 md:top-1/2 md:-translate-x-full md:-translate-y-1/2 md:ml-[-16px] left-0 -top-3 -translate-y-full w-[280px] z-[999999]">
                    <div
                      className="bg-[#262626] rounded-md p-3 shadow-lg flex flex-col gap-2 relative"
                      style={{ backdropFilter: "blur(5px)" }}
                    >
                      {/* Tooltip arrow */}
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block">
                        <div className="w-0 h-0 border-l-8 border-l-[#262626] border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
                      </div>

                      {/* Tooltip arrow for xs devices */}
                      <div className="absolute left-4 bottom-[-8px] block md:hidden">
                        <div className="w-0 h-0 border-t-8 border-t-[#262626] border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 min-w-1 bg-[#FAFAFA] rounded-full"></span>
                        <span className="text-xs text-[#FAFAFA]">
                          Must be atleast 8 characters
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 min-w-1 bg-[#FAFAFA] rounded-full"></span>
                        <span className="text-xs text-[#FAFAFA]">
                          Must contain atleast 1 number
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 min-w-1 bg-[#FAFAFA] rounded-full"></span>
                        <span className="text-xs text-[#FAFAFA]">
                          Must contain atleast 1 lowercase
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 min-w-1 bg-[#FAFAFA] rounded-full"></span>
                        <span className="text-xs text-[#FAFAFA]">
                          Must contain atleast 1 uppercase
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 min-w-1 bg-[#FAFAFA] rounded-full"></span>
                        <span className="text-xs text-[#FAFAFA]">
                          {
                            "Must contain at least 1 special character -_~!@#$%^&*`+=|;:><,.?/"
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <input
                  type={showPassword ? "text" : "password"}
                  id="signup-password"
                  name="signup-password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password must be at least 8 characters with letters and numbers",
                    },
                  })}
                  onFocus={() => !isLogin && setShowPasswordTooltip(true)}
                  onBlur={() => setShowPasswordTooltip(false)}
                  className={`block px-2.5 pb-2.5 pt-4 w-full h-[44px] text-sm text-gray-900 bg-transparent rounded-[1.5px] border-1 appearance-none dark:text-white peer
                ${
                  errors.password
                    ? "border-red-500"
                    : "border-[#404040] appearance-none dark:text-white dark:border-[#262626] dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer"
                }
                `}
                />
                <label
                  htmlFor="signup-password"
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
              <label
                htmlFor="signup-terms-checkbox"
                className="flex items-start gap-3 cursor-pointer select-none"
              >
                <input
                  id="signup-terms-checkbox"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => {
                    setAcceptTerms(e.target.checked);
                    if (e.target.checked) setShowTermsError(false);
                  }}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`w-4 h-4 rounded-xs flex items-center justify-center flex-shrink-0 transition-all
                    ${
                      acceptTerms
                        ? "bg-[#16A374] border-2 border-[#16A374]"
                        : showTermsError
                        ? "bg-transparent border-2 border-[#C71E1E]"
                        : "bg-transparent border-2 border-gray-300"
                    }`}
                  style={{ lineHeight: 0 }}
                >
                  {acceptTerms && (
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 5.2L4.4 8.4L13 1"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>

                <span
                  className={`text-xs xs:text-sm font-medium text-[#E5E5E5]`}
                >
                  Creating an account means you're okay with our{" "}
                  <span className="text-[#7C7CF7]">Terms of Service</span> and{" "}
                  <span className="text-[#7C7CF7]">Privacy Policy</span>
                </span>
              </label>

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
              <button className="bg-[#4285F4] rounded-[3px] p-1 flex items-center h-[46px] gap-6 w-3/4 xs:w-3/4 md:w-[80%] lg:w-3/4 xl:w-3/5 cursor-pointer">
                <img src={google_logo} alt="google logo" />
                <p className="font-medium text-sm text-[#FFFFFF]">
                  Continue with Google
                </p>
              </button>
              <p className="font-normal text-[16px] text-[#E5E5E5]">
                Already have an account?{" "}
                <span
                  onClick={() => handleFormSwitch(true)}
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
