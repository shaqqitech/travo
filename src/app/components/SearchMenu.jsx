"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchMenu = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [price, setPrice] = useState(null);

  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);

  const dropdownCountryRef = useRef(null);
  const dropdownDateRef = useRef(null);
  const dropdownPriceRef = useRef(null);

  const countries = [
    "Pakistan",
    "India",
    "China",
    "Nepal",
    "Bangladesh",
    "Albania",
    "Mali",
    "Malta",
    "Mongolia",
    "Canada",
  ];

  const prices = [
    "$100-$200",
    "$200-$300",
    "$300-$400",
    "$400-$500",
    "$500-$600",
    "$600-$700",
    "$700-$800",
    "$800-$900",
    "$900-$1000",
    "$1000-$2000",
  ];

  const toggleCountry = () => {
    setIsOpenCountry(!isOpenCountry);
  };

  const toggleDate = () => {
    setIsOpenDate(!isOpenDate);
  };

  const togglePrice = () => {
    setIsOpenPrice(!isOpenPrice);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpenCountry(false);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsOpenDate(false); // Close the calendar after selecting a date
  };

  const setPrices = (priced) => {
    setPrice(priced);
    setIsOpenPrice(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownCountryRef.current &&
      !dropdownCountryRef.current.contains(event.target) &&
      dropdownDateRef.current &&
      !dropdownDateRef.current.contains(event.target) &&
      dropdownPriceRef.current &&
      !dropdownPriceRef.current.contains(event.target)
    ) {
      setIsOpenCountry(false);
      setIsOpenDate(false);
      setIsOpenPrice(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="w-screen p-8 flex justify-center z-20">
      <div className="w-full lg:w-9/12 xl:w-8/12 2xl:w-7/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 shadow-xl rounded-lg ring-2">



        <div
          className="relative inline-block text-left z-40"
          ref={dropdownCountryRef}
        >
          <div>
            <button
              type="button"
              className="bg-gray-800 hover:bg-gray-900 w-full sm:w-56 px-4 py-2 rounded-md shadow-md shadow-gray-800 flex items-center justify-between z-0"
              onClick={toggleCountry}
            >
              {selectedCountry ? (
                <span className="text-gray-300">{selectedCountry}</span>
              ) : (
                <span className="text-gray-300 w-full">Select a country</span>
              )}
              <svg
                className={`ml-2 h-5 w-5 transition-transform transform ${
                  isOpenCountry ? "-rotate-180" : "rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  className="text-gray-300"
                />
              </svg>
            </button>
          </div>
          {isOpenCountry && (
            <div className="origin-top-right absolute right-0 mt-2 w-full sm:w-56 sm:right-auto sm:left-0 sm:origin-top-left sm:shadow-md sm:bg-gray-900">
              <div className="py-1">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => selectCountry(country)}
                    className="block w-full text-start px-4 py-2 bg-gray-800 text-sm text-gray-300 hover:bg-gray-800  z-[100]"
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>



        <div
          className="relative inline-block text-left z-10"
          ref={dropdownDateRef}
        >
          <div>
            <button
              type="button"
              className="bg-gray-800 hover:bg-gray-900 w-full sm:w-56 px-4 py-2 rounded-md shadow-md shadow-gray-800 flex items-center justify-between"
              onClick={toggleDate}
            >
              {selectedDate ? (
                <span className="text-gray-300">
                  {selectedDate.toDateString()}
                </span>
              ) : (
                <span className="text-gray-300 w-full">Select a date</span>
              )}
              <svg
                className={`ml-2 h-5 w-5 transition-transform transform ${
                  isOpenDate ? "-rotate-180" : "rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  className="text-gray-300"
                />
              </svg>
            </button>
          </div>
          {isOpenDate && (
            <div className="origin-top-right absolute right-0 mt-2 w-full sm:w-56 sm:right-auto sm:left-0 sm:origin-top-left sm:shadow-md sm:bg-gray-900 z-50">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateSelect}
                inline
                className="py-1 px-4 text-gray-300"
              />
            </div>
          )}
        </div>



        <div
          className="relative inline-block text-left z-10"
          ref={dropdownPriceRef}
        >
          <div>
            <button
              type="button"
              className="bg-gray-800 hover:bg-gray-900 w-full sm:w-56 px-4 py-2 shadow-md shadow-gray-800 flex items-center justify-between"
              onClick={togglePrice}
            >
              {price ? (
                <span className="text-gray-300">{price}</span>
              ) : (
                <span className="text-gray-300 w-full">Select Price Range</span>
              )}
              <svg
                className={`ml-2 h-5 w-5 transition-transform transform ${
                  isOpenPrice ? "-rotate-180" : "rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  className="text-gray-300"
                />
              </svg>
            </button>
          </div>
          {isOpenPrice && (
            <div className="origin-top-right absolute right-0 mt-2 w-full sm:w-56 sm:right-auto sm:left-0 sm:origin-top-left sm:shadow-md sm:bg-gray-900">
              <div className="py-1">
                {prices.map((priced) => (
                  <button
                    key={priced}
                    onClick={() => setPrices(priced)}
                    className="block w-full text-start px-4 py-2 text-sm bg-gray-800 text-gray-300 hover:bg-gray-800 z-50"
                  >
                    {priced}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-500 hover:bg-blue-600 py-2 rounded-tr-lg rounded-br-lg flex justify-center items-center cursor-pointer">
          <p className=" font-bold text-xl text-white">Search</p>
        </div>
      </div>
    </main>
  );
};

export default SearchMenu;
