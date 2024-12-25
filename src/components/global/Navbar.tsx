import React from "react";
import { navItems } from "../constants/navItems";
import AnimatedBackground from "../ui/animated-background";
import { BorderTrail } from "@/components/ui/border-trail";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-5 z-50">
      {" "}
      {/* Added relative positioning */}
      <div className="w-full h-full flex items-center justify-center px-[10px]">
        <div className="w-[450px] md:w-[500px] h-full flex items-center justify-center">
          <div className="flex items-center justify-between w-full h-15 border border-[#64748b] bg-[#0300145e] px-[20px] py-[10px] rounded-xl relative">
            {" "}
            {/* Added relative */}
            <BorderTrail />
            <AnimatedBackground
              defaultValue={navItems[0].name}
              className="bg-"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
            >
              {navItems.map((item, index) => (
                <button
                  key={index}
                  data-id={item.name}
                  type="button"
                  className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-50"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.name}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
