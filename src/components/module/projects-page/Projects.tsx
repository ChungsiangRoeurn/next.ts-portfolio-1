"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../../../../utils/motion";

const Projects = () => {
  return (
    <section className="w-full h-screen mt-20 flex flex-col">
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
            <h1 className="text-purple-300 text-sm sm:text-base">
              My Projects
            </h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-medium mt-[10px] text-center mb-10"
          >
            I have worked on various projects to enhance my skills and
            experience.
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center h">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-9">
          <div className="project-cards"></div>
          <div className="project-cards"></div>
          <div className="project-cards"></div>
          <div className="project-cards"></div>{" "}
          <div className="project-cards"></div>
          <div className="project-cards"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
