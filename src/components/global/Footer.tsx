import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-auto w-full mt-36 flex flex-col items-center justify-center ">
      <div className="flex-col flex justify-center items-center">
        <h1 className="text-slate-400 underline">
          Belongs to Chungsiang Roeurn
        </h1>
        <span className="text-cyan-500">All right Done @ 2024</span>
      </div>
      <div className="flex gap-6 my-8 cursor-pointer">
        <Image
          src="/assets/linkedin.svg"
          alt="logo"
          width={30}
          height={30}
          className=""
        />
        <Image
          src="/assets/gitwhite.png"
          alt="logo"
          width={30}
          height={30}
          className=""
        />
        <Image
          src="/assets/fb.svg"
          alt="logo"
          width={30}
          height={30}
          className=""
        />
        <Image
          src="/assets/tg.svg"
          alt="logo"
          width={30}
          height={30}
          className=""
        />
      </div>
    </div>
  );
};

export default Footer;
