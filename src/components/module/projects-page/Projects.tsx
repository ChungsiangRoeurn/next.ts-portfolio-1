"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../../../../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects-page" className="w-full h-screen mt-20 flex flex-col">
      <div
        style={{ transform: "scale(0.9" }}
        className="flex items-center justify-center"
      >
        <div className="w-full h-auto flex flex-col items-center ">
          <motion.div
            variants={slideInFromTop}
            className="flex items-start rounded-full py-2 px-3 border border-purple-400 opacity-90"
          >
            <h1 id="projects" className="text-purple-300 text-sm sm:text-base">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {/* Project Card 1 */}
          <div className="project-cards relative overflow-hidden rounded-xl shadow-lg">
            <Link
              href="https://quick-task-seven.vercel.app/"
              target="_blank"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/assets/pj1.png"
                alt="pj1"
                layout="fill"
                className="object-cover rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                quality={100}
              />
            </Link>
          </div>

          {/* Project Card 2 */}
          <div className="project-cards relative overflow-hidden rounded-xl shadow-lg">
            <Link
              href="https://todo-list-oof7ugrdp-chungsiang-roeurns-projects.vercel.app/?"
              target="_blank"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/assets/pj2.png"
                alt="pj2"
                layout="fill"
                className="object-cover rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                quality={100}
              />
            </Link>
          </div>

          {/* Project Card 3 */}
          <div className="project-cards relative overflow-hidden rounded-xl shadow-lg">
            <Link
              href="https://chungsiang-roeurn.vercel.app/"
              target="_blank"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/assets/pj3.png"
                alt="pj3"
                layout="fill"
                className="object-cover rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                quality={100}
              />
            </Link>
          </div>

          {/* Project Card 4 */}
          <div className="project-cards relative overflow-hidden rounded-xl shadow-lg">
            <Link
              href="https://frontend-portfolio-liard.vercel.app/#home"
              target="_blank"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/assets/pj4.png"
                alt="project4"
                layout="fill"
                className="object-cover rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                quality={100}
              />
            </Link>
          </div>

          {/* Project Card 5 */}
          <div className="project-cards relative overflow-hidden rounded-xl shadow-lg">
            <Link
              href="https://quick-task-seven.vercel.app/"
              target="_blank"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/assets/pj4.png"
                alt="project1"
                layout="fill"
                className="object-cover rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                quality={100}
              />
            </Link>
          </div>
          {/* Project Card 6 */}
          <div className="project-cards relative overflow-hidden rounded-xl shadow-lg">
            <Link
              href="https://chungsiang-roeurn.vercel.app/"
              target="_blank"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/assets/pj3.png"
                alt="project3"
                layout="fill"
                className="object-cover rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                quality={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
