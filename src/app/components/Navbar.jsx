"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <main className="absolute z-10 hidden md:flex w-full items-center justify-between px-10 py-4">
        <Link href={"/"} className="font-bold text-3xl">
          Travo
        </Link>
        <ul className="flex items-center space-x-8 font-semibold">
          <li className="cursor-pointer hover:text-orange-400">Home</li>
          <li className="cursor-pointe hover:text-orange-400">Category</li>
          <li className="cursor-pointer hover:text-orange-400">Blog</li>
          <li className="cursor-pointer hover:text-orange-400">About Us</li>
        </ul>
        <Link
          href={"/"}
          className="border-2 px-6 py-1 bg-orange-600 text-white rounded-lg"
        >
          Log In
        </Link>
      </main>

      {/* Navbar for smaller screens */}
      <main className="absolute z-10 md:hidden w-full items-center justify-between px-4 py-4">
        <Link href={"/"} className="font-bold text-3xl">
          Travo
        </Link>
        <div>
          <p onClick={onToggle} className="absolute right-3 top-3">
            {isOpen ? <RxCross2 size={25} /> : <CiMenuFries size={25} />}
          </p>
          {isOpen && (
            <div className="absolute rounded-lg px-3 py-3 space-y-3 text-white flex flex-col top-12 right-4 w-24 h-48 bg-gray-700">
              <ul className="flex flex-col space-y-2 font-semibold">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Category</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">About Us</li>
              </ul>
              <Link href={"/"} className="font-bold text-xl">
                Log In
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Navbar;
