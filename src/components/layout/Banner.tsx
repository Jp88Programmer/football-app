import Image from "next/image";
import React from "react";
import banner from "../../../public/Banner1.png";

const Banner = () => {
  return (
    <div className="w-full rounded-lg">
      <Image alt="banner" src={banner} className="w-full h-64" />
    </div>
  );
};

export default Banner;
