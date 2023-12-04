"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ImageType {
  thumb: string;
}
interface HouseType {
  room: number;
  price: number;
  district: {
    title: string;
  };
  images: ImageType[];
}

export default function House() {
  const [house, setHouse] = useState<HouseType[]>([]);
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    const getHouse = async () => {
      const response = await axios.get(
        `https://api.roommategeorgia.ge/flats?page=${page}`
      );
      setHouse(response.data.data);
    };
    getHouse();
  }, [page]);

  return (
    <div className="w-full min-h-screen grid grid-col-1 gap-6 justify-center px-[10%] py-5 bg-[#eee8e8] md:grid-cols-2 ">
      {house &&
        house.map((item, index) => (
          <div
            key={index}
            className="w-[350px] bg-white h-[300px] rounded-md flex flex-col rounded-2 overflow-hidden shadow-2xl shadow-#7f7878-400
        md:w-full"
          >
            <div className="w-full h-[75%] relative">
              <Carousel responsive={responsive} infinite={true}>
                {item.images.map((image, i) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                    }}
                  >
                    <Image
                      src={image.thumb}
                      alt="House image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="flex flex-row items-center px-3 py-3 border-b-2 border-[gray]">
              <span className=" text-[black]">
                number of rooms: {item.room}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between px-3 py-3 ">
              <span>Location: {item.district.title} </span>
              <span className=" text-[black]">{item.price} total rent</span>
            </div>
          </div>
        ))}
    </div>
  );
}

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1440, min: 768 },
    items: 1,
  },
  tabletOne: {
    breakpoint: { max: 768, min: 430 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 430, min: 0 },
    items: 1,
  },
};
