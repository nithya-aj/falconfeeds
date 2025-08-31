const LoadingScreen = () => {
  return (
    <div
      className="h-screen w-full text-[#A3A3A3] font-normal flex flex-col place-items-center justify-center relative"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <p className="text-[9px] xs:text-xs md:text-sm lg:text-base self-center absolute top-16 ">
        Logging you into
      </p>
      <h1
        className="text-[44px] xs:text-5xl sm:text-6xl lg:text-7xl xl:text-9xl text-[#D4D4D4]"
        style={{ fontFamily: '"Bebas Neue", sans-serif' }}
      >
        FALCON FEEDS
      </h1>
      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pt-2.5">
        Cyber Threat Intelligence Platform
      </p>
    </div>
  );
};

export default LoadingScreen;
