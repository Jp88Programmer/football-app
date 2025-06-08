import Image from "next/image";
import React from "react";
import banner from "../../../public/Banner1.png";

const Banner = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Image 
        alt="banner" 
        src={banner} 
        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
    </div>
  );
};

export default Banner;
