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
      {house &&
        house.map((item, index) => (
          <div className="w-full bg-white h-[320px] rounded-md flex flex-col ">
            <div className="w-full h-[60%] relative" key={index}>
              <Image
                src={item.images[0].original}
                alt="Banner"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <span className=" text-[black]">Number of room</span>
            <span className=" text-[black]">{item.price}</span>
          </div>
        ))}
    </div>
  );
}
