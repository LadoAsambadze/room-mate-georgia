"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function House() {
  const [house, setHouse] = useState([]);
  console.log(house);
  console.log(house);
  useEffect(() => {
    const getHouse = async () => {
      const response = await axios.get("https://api.roommategeorgia.ge/flats");
      setHouse(response.data.data);
    };
    getHouse();
  }, []);
  return (
    <div className="w-full  min-h-screen flex flex-col items-center px-[15%] py-3 bg-[gray] ">
      
      <div className="w-full bg-white h-[320px] rounded-md flex flex-col ">
        <div className="w-full h-[60%] relative">
          <Image
            src="/images/banner.png"
            alt="Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <span className=" text-[black]">Number of room</span>
        <span className=" text-[black]">price</span>
      </div>
    </div>
  );
}
