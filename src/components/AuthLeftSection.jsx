import logo from "../assets/falconfeeds-logo.svg";
import verified_tick from "../assets/verified-tick.svg";
import technisanct from "../assets/technisanct.svg";

const AuthLeftSection = () => {
  return (
    <div className="w-3/5 place-items-center py-6 hidden md:block">
      <div className="md:w-4/5 lg:w-3/5 h-full flex flex-col items-start justify-around ">
        <div className="flex items-center gap-5">
          <img
            src={logo}
            alt="falconfeeds logo"
            className="md:h-6 lg:h-8 xl:h-auto"
          />
          <p className="font-semibold md:text-xl lg:text-2xl xl:text-4xl uppercase satoshi">
            falconfeeds
            <span className="text-[#EB2323]">.</span>io
          </p>
        </div>
        <h1 className="font-bold md:text-4xl xl:text-5xl leading-14 text-[#D4D4D4] public-sans">
          Hunt, Identify and <br />
          <span className="text-[#16A374]"> Act</span> on{" "}
          <span className="text-[#EB2F2F]"> threats</span> before <br />
          they can harm you<span className="text-[#EB2F2F]">.</span>
        </h1>
        <ul className="flex flex-col items-start text-[#B6B6B6] gap-3">
          <li>
            <div className="flex items-center gap-4 font-normal md:text-base lg:text-[20px]">
              <img
                src={verified_tick}
                alt="verified tick image"
                className="md:h-6 xl:h-auto"
              />
              <p>Comprehensive threat actor directory</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-4 font-normal md:text-base lg:text-[20px]">
              <img
                src={verified_tick}
                alt="verified tick image"
                className="md:h-6 xl:h-auto"
              />
              <p>Constantly updated threat feeds</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-4 font-normal md:text-base lg:text-[20px]">
              <img
                src={verified_tick}
                alt="verified tick image"
                className="md:h-6 xl:h-auto"
              />
              <p>Safe source for tracking threat actors and campaigns</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-4 font-normal md:text-base lg:text-[20px]">
              <img
                src={verified_tick}
                alt="verified tick image"
                className="md:h-6 xl:h-auto"
              />
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
  );
};

export default AuthLeftSection;
