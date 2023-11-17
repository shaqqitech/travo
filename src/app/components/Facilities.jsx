import Image from "next/image";
import HomePic from "../../../public/explore.png";
import { MdFlightTakeoff, MdWifi, MdHotel, MdFastfood } from "react-icons/md";

const Facilities = () => {
  return (
    <main>
      <div className="w-screen h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:pt-32 lg:p-12 z-10">
        {/* Left Box */}
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
        {/* Right Box */}
        <div className="w-full h-full flex flex-col justify-center items-center p-10 space-y-8">
            <div className="space-y-4 w-full lg:w-4/5">
                <h1 className="text-4xl font-bold">Explore all corners of the world with us.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus error ea facere ratione maxime excepturi!</p>
            </div>
            <div className="grid place-content-center grid-cols-2 text-xl  w-full lg:w-4/5">
                <div className="flex flex-col space-y-2">
                    <h1 className="w-full font-bold gap-3 flex items-center"><MdFlightTakeoff className="text-orange-500" />Flight</h1>
                    <h1 className="w-full font-bold gap-3 flex items-center"><MdWifi className="text-orange-500" />Wifi</h1>
                </div>
                <div className="flex flex-col space-y-2">
                    <h1 className="w-full font-bold gap-3 flex items-center"><MdHotel className="text-orange-500" />Hotel</h1> 
                    <h1 className="w-full font-bold gap-3 flex items-center"><MdFastfood className="text-orange-500" />Food</h1>
                </div>

            </div>
        </div>
      </div>
    </main>
  );
};

export default Facilities;
