'use client'
import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

import Beach1 from "../../../public/popularPlaces/Beach1.jpg";
import Beach2 from "../../../public/popularPlaces/Beach2.jpg";
import Beach3 from "../../../public/popularPlaces/Beach3.jpg";
import Beach4 from "../../../public/popularPlaces/Beach4.jpg";
import Beach5 from "../../../public/popularPlaces/Beach5.jpg";
import Beach6 from "../../../public/popularPlaces/Beach6.jpg";

import Mountain1 from "../../../public/popularPlaces/mountain1.jpg";
import Mountain2 from "../../../public/popularPlaces/mountain2.jpg";
import Mountain3 from "../../../public/popularPlaces/mountain3.jpg";
import Mountain4 from "../../../public/popularPlaces/mountain4.jpg";
import Mountain5 from "../../../public/popularPlaces/mountain5.jpg";
import Mountain6 from "../../../public/popularPlaces/mountain6.jpg";

import Iceberg1 from "../../../public/popularPlaces/iceberg1.jpg";
import Iceberg2 from "../../../public/popularPlaces/iceberg2.jpg";
import Iceberg3 from "../../../public/popularPlaces/iceberg3.jpg";
import Iceberg4 from "../../../public/popularPlaces/iceberg4.jpg";
import Iceberg5 from "../../../public/popularPlaces/iceberg5.jpg";
import Iceberg6 from "../../../public/popularPlaces/iceberg6.jpg";

import Waterfall1 from "../../../public/popularPlaces/waterfall1.jpg";
import Waterfall2 from "../../../public/popularPlaces/waterfall2.jpg";
import Waterfall3 from "../../../public/popularPlaces/waterfall3.jpg";
import Waterfall4 from "../../../public/popularPlaces/waterfall4.jpg";
import Waterfall5 from "../../../public/popularPlaces/waterfall5.jpg";
import Waterfall6 from "../../../public/popularPlaces/waterfall6.jpg";


const PopularPlaces = () => {
  const [data, setData] = useState([
    {
      name: 'Siasconset Beach',
      img: Beach1,
      place: 'Island',
      rating: '4.5',
    },
    {
      name: 'HorseShoe Bay',
      img: Mountain1,
      place: 'Indonesia',
      rating: '4.7',
    },
    {
      name: 'Virgin Gorda',
      img: Waterfall1,
      place: 'Japan',
      rating: '4.4',
    },
    {
      name: 'Siasconset Beach',
      img: Beach4,
      place: 'Island',
      rating: '4.5',
    },
    {
      name: 'HorseShoe Bay',
      img: Mountain4,
      place: 'Indonesia',
      rating: '4.7',
    },
    {
      name: 'Virgin Gorda',
      img: Waterfall4,
      place: 'Japan',
      rating: '4.4',
    },
  ]);

  const handleBeachClick = () => {
    setData([
      { name: "Siasconset Beach", img: Beach1, place: "Island", rating: '4.5' },
      { name: "HorseShoe Bay", img: Beach2, place: "Indonesia", rating: '4.7' },
      { name: "Virgin Gorda", img: Beach3, place: "Japan", rating: '4.4' },
      { name: "Siasconset Beach", img: Beach4, place: "Island", rating: '4.5' },
      { name: "HorseShoe Bay", img: Beach5, place: "Indonesia", rating: '4.7' },
      { name: "Virgin Gorda", img: Beach6, place: "Japan", rating: '4.4' },
    ]);
  };

  const handleMountainClick = () => {
    setData([
      { name: "Siasconset Beach", img: Mountain1, place: "Island", rating: '4.5' },
      { name: "HorseShoe Bay", img: Mountain2, place: "Indonesia", rating: '4.7' },
      { name: "Virgin Gorda", img: Mountain3, place: "Japan", rating: '4.4' },
      { name: "Siasconset Beach", img: Mountain4, place: "Island", rating: '4.5' },
      { name: "HorseShoe Bay", img: Mountain5, place: "Indonesia", rating: '4.7' },
      { name: "Virgin Gorda", img: Mountain6, place: "Japan", rating: '4.4' },
    ]);
  };

  const handleWaterfallClick = () => {
    setData([
      { name: "Siasconset Beach", img: Waterfall1, place: "Island", rating: '4.5' },
      { name: "HorseShoe Bay", img: Waterfall2, place: "Indonesia", rating: '4.7' },
      { name: "Virgin Gorda", img: Waterfall3, place: "Japan", rating: '4.4' },
      { name: "Siasconset Beach", img: Waterfall4, place: "Island", rating: '4.5' },
      { name: "HorseShoe Bay", img: Waterfall5, place: "Indonesia", rating: '4.7' },
      { name: "Virgin Gorda", img: Waterfall6, place: "Japan", rating: '4.4' },
    ]);
  };

  const handleIcebergClick = () => {
    setData([
      { name: "Siasconset Beach", img: Iceberg1, place: "Island", rating: '4.5' },
      { name: "HorseShoe Bay", img: Iceberg2, place: "Indonesia", rating: '4.7' },
      { name: "Virgin Gorda", img: Iceberg3, place: "Japan", rating: '4.4' },
      { name: "Siasconset Beach", img: Iceberg4, place: "Island", rating: '4.5' },
      { name: "HorseShoe Bay", img: Iceberg5, place: "Indonesia", rating: '4.7' },
      { name: "Virgin Gorda", img: Iceberg6, place: "Japan", rating: '4.4' },
    ]);
  };

  return (
    <main className="w-full flex flex-col justify-center items-center px-4 lg:px-8 py-8 md:py-10">
      <div className="w-full flex flex-col lg:px-28 lg:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold mb-4 lg:mb-0">Explore Places</h1>
        <ul className="flex flex-wrap justify-center items-center space-x-2 lg:space-x-5">
        <li className="cursor-pointer font-semibold my-1 hover:text-orange-400" onClick={handleBeachClick}>Beach</li>
          <li className="cursor-pointer font-semibold my-1 hover:text-orange-400" onClick={handleMountainClick}>Mountain</li>
          <li className="cursor-pointer font-semibold my-1 hover:text-orange-400" onClick={handleWaterfallClick}>Waterfall</li>
          <li className="cursor-pointer font-semibold my-1 hover:text-orange-400" onClick={handleIcebergClick}>Iceberg</li>
          <li className="cursor-pointer font-semibold text-orange-500 my-1">View all</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 ">
        {data.map((item, ind) => (
          <div key={ind} className="w-full md:w-80 hover:scale-105 duration-150">
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
