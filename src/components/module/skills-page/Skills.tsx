"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../../../../utils/motion";
import ScrollingTestimonials from "@/components/sub/ScrollingTestimonials";

const Skills = () => {
  return (
    <section className="w-full h-full mt-20 flex flex-col">
      <div
        id="skills"
        style={{ transform: "scale(0.9" }}
        className="flex items-center justify-center"
      >
        <div className="w-full h-auto flex flex-col items-center ">
          <motion.div
            variants={slideInFromTop}
            className="flex items-start rounded-full py-2 px-3 border border-purple-400 opacity-90"
          >
            <h1 className="text-purple-300 text-sm sm:text-base">My Skills</h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-medium mt-[10px] text-center"
          >
            Frontend, Backend, and Modern Web Technologies.
          </motion.div>
        </div>
      </div>
      <div className="w-full h-auto flex items-center flex-col gap-5 justify-between">
        <div className="text-slate-300 text-center items-start p-4 w-[500px] lg:w-[700px] h-auto px-2">
          As I mentioned before, I am a{" "}
          <span className="font-semibold">
            Junior Full Stack Software Developer{" "}
          </span>
          with experience in building websites, mobile applications, and
          software solutions. I am continually learning and progressing, gaining
          hands-on experience with a wide range of technologies and frameworks.
          Below, you can find some of the{" "}
          <span className="font-semibold">frontend</span>,{" "}
          <span className="font-semibold">backend</span>, and other technologies
          I have worked with, explored, and continue to expand my knowledge in.
        </div>
        <ScrollingTestimonials />
      </div>
    </section>
  );
};

export default Skills;
