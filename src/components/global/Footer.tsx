import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-auto w-full mt-52 flex flex-col items-center justify-center ">
      <div className="flex-col flex justify-center items-center">
        <h1 className="text-slate-400">
          Belongs to <span className="underline">Chungsiang Roeurn</span>
        </h1>
        <span className="text-cyan-500 underline">All Right Done @ 2024</span>
      </div>
      <div className="flex gap-6 my-8 cursor-pointer">
        <Link
          href="https://www.linkedin.com/in/chungsiang-roeurn-%E9%99%88%E4%BF%8A%E7%A5%A5-0457402b9/"
          target="_blank"
        >
          <Image src="/assets/linkedin.svg" alt="logo" width={30} height={30} />
        </Link>{" "}
        <Link href="https://github.com/ChungsiangRoeurn" target="_blank">
          <Image src="/assets/gitwhite.png" alt="logo" width={30} height={30} />
        </Link>
        <Link
          href="https://www.facebook.com/chungsiang.roeurn.79"
          target="_blank"
        >
          <Image src="/assets/fb.svg" alt="logo" width={30} height={30} />
        </Link>
        <Link href="https://t.me/rn_chungsiang" target="_blank">
          <Image src="/assets/tg.svg" alt="logo" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
