import React from "react";
import AboutMe from "../sub/SkillText";
import Image from "next/image";
import { BorderTrail } from "../ui/border-trail";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div
        id="skills"
        style={{ transform: "scale(0.9" }}
        className="flex flex-col items-center justify-center h-full relative overflow-hidden"
      >
        <AboutMe />
      </div>
      <div className="flex flex-row justify-center w-full h-[120rem] gap-4">
        <div className="bg-red-400 w-[50%] h-full">
          <Image
            src={"/assets/chungsiangAsKid.jpg"}
            alt=""
            width={500}
            height={500}
            className="items-center justify-center flex align-center"
          />
          <textarea className="h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none" />
          <BorderTrail
            className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
            size={300}
          />
        </div>
        <div className="bg-yellow-400 w-[50%] h-full flex items-center justify-center">
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
};

export default About;
