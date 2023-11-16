import React from "react";
import Travel1 from '../../../public/travel/travel1.jpg';
import Travel2 from '../../../public/travel/travel2.jpg';
import Travel3 from '../../../public/travel/travel3.jpg';
import Travel4 from '../../../public/travel/travel4.jpg';
import Travel5 from '../../../public/travel/travel5.jpg';
import Travel6 from '../../../public/travel/travel6.jpg';
import Travel7 from '../../../public/travel/travel7.jpg';
import Travel8 from '../../../public/travel/travel8.jpg';
import Travel9 from '../../../public/travel/travel9.jpg';
import Travel10 from '../../../public/travel/travel10.jpg';
import Travel11 from '../../../public/travel/travel11.jpg';
import Travel12 from '../../../public/travel/travel12.jpg';
import Travel13 from '../../../public/travel/travel13.jpg';
import Travel14 from '../../../public/travel/travel14.jpg';
import Travel15 from '../../../public/travel/travel15.jpg';
import Travel16 from '../../../public/travel/travel16.jpg';
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
              src={Travel1}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Travel2}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Travel3}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Travel4}
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
              src={Travel5}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Travel6}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Travel7}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Travel8}
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
              src={Travel9}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Travel10}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Travel11}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Travel12}
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
              src={Travel13}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Travel14}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={Travel15}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={Travel16}
              alt="image"
              width={1}
              height={1}
              sizes="100%"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>

      </div>
    </main>
  );
};

export default Gallery;
