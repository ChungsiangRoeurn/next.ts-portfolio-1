import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="flex flex-col relative h-full w-full">
      {/* <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/assets/blackhole.webm" type="video/webm" />
      </video> */}
      <HeroContent />
    </div>
  );
};

export default Hero;
