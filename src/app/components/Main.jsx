"use client";
import Image from "next/image";
import HomePic from "../../../public/main.png";
import { PiStarFourFill } from "react-icons/pi";
import { LuPlane } from "react-icons/lu";
import SearchMenu from "./SearchMenu";

const Main = () => {
  return (
    <div className="w-screen border-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:pt-32 lg:p-12 z-10">
      {/* Left Box */}
      <div className="w-full h-full flex justify-center items-center md:items-start p-4 md:p-8 relative">
        <div className="w-full h-full pt-24 pl-10 md:pt-16 md:pl-16 text-start md:text-left">
          <div className="flex flex-col w-full h-full text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <p>Explore</p>
            <p className="flex justify-start items-center">
              Beautiful <PiStarFourFill size={35} />{" "}
            </p>
            <p>World</p>
          </div>
        </div>
        <div className="absolute right-4 top-16 md:top-3 lg:top-5">
          <LuPlane className="text-4xl" />
        </div>
        <div className="absolute bottom-24 left-28 z-50">
          <SearchMenu />
        </div>
      </div>
      {/* Right Box */}
      <div className="relative">
        <Image
          src={HomePic}
          alt="Home Pic"
          layout="responsive"
          width={1920}
          height={1080}
          priority="true"
          className="w-full h-auto rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Main;
