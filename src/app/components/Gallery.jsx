import React from "react";
import Beach1 from "../../../public/popularPlaces/Beach1.jpg";
import Beach2 from "../../../public/popularPlaces/Beach2.jpg";
import Beach3 from "../../../public/popularPlaces/Beach3.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <main className="w-full p-6 md:p-10 lg:p-24 flex flex-col justify-center items-center">
      <div className="w-full py-6 md:px-4 md:py-10 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <h1 className="text-2xl md:text-4xl font-bold">Our Gallery</h1>
          <p className="md:ml-2">- Share your happy moments</p>
        </div>
        <p className="text-orange-600 cursor-pointer font-semibold mt-4 md:mt-0">
          View all
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 py-6 md:py-12">
        <div className="flex flex-col gap-6">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Beach1}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Beach2}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Beach3}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Beach1}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>


        <div className="flex flex-col gap-6">
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Beach2}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Beach3}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Beach1}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Beach2}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Beach1}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Beach2}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Beach3}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Beach1}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>


        <div className="flex flex-col gap-6">
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Beach2}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Beach3}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Beach1}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Beach2}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        {/* Repeat similar patterns for the 3rd and 4th columns */}
        {/* ... */}
      </div>
    </main>
  );
};

export default Gallery;
