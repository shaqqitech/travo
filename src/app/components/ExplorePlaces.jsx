import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

import Beach1 from "../../../public/popularPlaces/Beach1.jpg";
import Beach2 from "../../../public/popularPlaces/Beach2.jpg";
import Beach3 from "../../../public/popularPlaces/Beach3.jpg";

const PopularPlaces = () => {
  const data = [
    { name: "Siasconset Beach", img: Beach1, place: "Island", rating: '4.5' },
    { name: "HorseShoe Bay", img: Beach2, place: "Indonesia", rating: '4.7' },
    { name: "Virgin Gorda", img: Beach3, place: "Japan", rating: '4.4' },
    { name: "Siasconset Beach", img: Beach1, place: "Island", rating: '4.5' },
    { name: "HorseShoe Bay", img: Beach2, place: "Indonesia", rating: '4.7' },
    { name: "Virgin Gorda", img: Beach3, place: "Japan", rating: '4.4' },
  ];

  return (
    <main className="w-full flex flex-col justify-center items-center px-4 lg:px-8 py-8 md:py-10">
      <div className="w-full flex flex-col lg:px-28 lg:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold mb-4 lg:mb-0">Explore Places</h1>
        <ul className="flex flex-wrap justify-center items-center space-x-2 lg:space-x-5">
          <li className="cursor-pointer font-semibold my-1">Beach</li>
          <li className="cursor-pointer font-semibold my-1">Mountain</li>
          <li className="cursor-pointer font-semibold my-1">Waterfall</li>
          <li className="cursor-pointer font-semibold my-1">Iceberg</li>
          <li className="cursor-pointer font-semibold text-orange-500 my-1">View all</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {data.map((item, ind) => (
          <div key={ind} className="w-full md:w-80">
            <div className="border-2 rounded-lg shadow-lg">
              <div className="h-48 md:h-52 rounded-t-lg overflow-hidden relative">
                <Image src={item.img} alt="Beach Image" layout="fill" objectFit="cover" />
              </div>
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">{item.name}</h1>
                  <p className="flex items-center text-yellow-500">
                    <AiFillStar />{item.rating}
                  </p>
                </div>
                <p className="flex items-center space-x-1">
                  <MdOutlineLocationOn className="text-blue-500" />
                  {item.place}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PopularPlaces;
