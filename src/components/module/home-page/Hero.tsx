"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
// import HeroContent from "../sub/HeroContent";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../../../utils/motion";
import Terminal from "../../sub/Terminal";

const Hero = () => {
  return (
    <div className="flex h-screen items-center flex-col lg:flex-row justify-between px-6 lg:px-12">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/2 mt-44 lg:mt-0 ">
        <button className="flex items-center rounded-full py-2 px-3 border border-purple-400 opacity-90">
          <h1 className="text-purple-300 text-sm sm:text-base">
            Portfolio with NextJS
          </h1>
        </button>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px]"
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
          className="text-base sm:text-lg text-gray-400 mt-4 lg:mt-6 max-w-[600px] lg:w-[400px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my resume below.
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

      <div className="w-full h-full mt-6 lg:mt-0 lg:w-1/2 flex justify-center items-center">
        <Terminal />
      </div>
    </div>
  );
};

export default Hero;
