import React from "react";

const Destinations = () => {
  return (
    <main className="p-16 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="w-40 h-40 text-xl text-orange-600 font-bold shadow-lg rounded-lg grid place-content-center border-2 place-items-center">
          24+ <p className="text-md font-semibold pt-3 text-black">Cities</p>{" "}
        </div>
        <div className="w-40 h-40 text-xl text-orange-600 font-bold shadow-lg rounded-lg grid place-content-center border-2 place-items-center">
          700+ <p className="text-md font-semibold pt-3 text-black">Places</p>{" "}
        </div>
        <div className="w-40 h-40 text-xl text-orange-600 font-bold shadow-lg rounded-lg grid place-content-center border-2 place-items-center">
          200+ <p className="text-md font-semibold pt-3 text-black">Hotels</p>{" "}
        </div>
        <div className="w-40 h-40 text-xl text-orange-600 font-bold shadow-lg rounded-lg grid place-content-center border-2 place-items-center">
          2k+ <p className="text-md font-semibold pt-3 text-black">Reviews</p>{" "}
        </div>
      </div>
    </main>
  );
};

export default Destinations;
