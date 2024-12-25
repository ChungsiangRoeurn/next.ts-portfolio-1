"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "../../../../utils/motion";
import Terminal from "../../sub/Terminal";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section
      id="home"
      className="flex h-screen items-center flex-col lg:flex-row justify-center px-6 lg:px-12"
    >
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/2 mt-44 lg:mt-0 ">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-7xl font-bold text-white max-w-[600px]"
        >
          <span>
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-500">
              ROEURN
            </span>{" "}
            CHUNGSIANG
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 mt-4 lg:mt-6 max-w-[600px] lg:w-[450px]"
        >
          As a Full Stack Software Developer, I have extensive experience in
          building websites, mobile applications, and software solutions. You
          can view my resume below.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#resume"
          target="_blank"
          className="py-2 button-primary px-4 mt-6 bg-local rounded-full text-center text-gray-500 font-semibold max-w-[200px]"
        >
          View Resume!
        </motion.a>
      </div>

      <div className="w-full mt-8 lg:w-1/2 flex justify-center items-center">
        <Terminal />
      </div>
    </section>
  );
};

export default Hero;
