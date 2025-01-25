import React from "react";
import hero1 from "../../assets/hero1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner from "../../assets/banner/lap_size_republic_day.png";

const Hero = () => {
  return (
    <div>
      <div className="flex w-screen bg-white h-screen">
        {/* <img src={banner1} className="w-[45%]" alt="" /> */}
        <img src={banner} className="w-full" alt="" />
      </div>
      <div
        style={{
          backgroundImage: `url(${hero1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" min-h-[130vh] w-full overflow-hidden p-8 sm:py-20 sm:p-14 md:p-20 md:shadow-xl"
      >
        <div className="font-bold text-3xl sm:text-4xl md:text-7xl text-center">
          <h1 className=" text-[#FEB331]">Joy Junction Family Game Zone:</h1>
          <h2 className="text-white mt-2">
            Dhanbad's Premier Indoor <br />
            Gaming Hub
          </h2>
          <br className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
