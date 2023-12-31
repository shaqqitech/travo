"use client";
import Image from "next/image";
import HomePic from "../../../public/main.png";
import { PiStarFourFill } from "react-icons/pi";
import { LuPlane } from "react-icons/lu";
import SearchMenu from "./SearchMenu";

const Main = () => {
  return (
    <main>

    <div className="w-screen h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:pt-32 lg:p-12 z-10">
      {/* Left Box */}
      <div className="w-full h-full flex justify-center items-center md:items-start p-4 md:p-8 relative">
        <div className="w-full h-full pt-24 md:pl-0 lg:pl-10 md:pt-16">
          <div className="flex flex-col px-3 md:px-0 text-6xl lg:text-8xl font-bold mb-4 md:mb-6">
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

      </div>
      {/* Right Box */}
      <div className="relative w-full h-full">
        <Image
          src={HomePic}
          alt="Home Pic"
          width={1}
          height={1}
          sizes="100%"
          className="w-full h-auto"
        />
      </div>
    </div>
    
    </main>
  );
};

export default Main;
