"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FilterIcon from "../../public/images/filter.png";

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
import { useRouter, useSearchParams } from "next/navigation";
import HouseFilter from "../components/filters/HouseFilter";
import { RootState, setHouseFilter } from "@/redux/houseFilterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const [house, setHouse] = useState<HouseType[]>([]);
  const searchParams = useSearchParams();

  const houseFilter = useSelector(
    (state: RootState) => state.houseFilter.houseFilter
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const houseFilterRange = useSelector(
    (state: RootState) => state.houseFilter.rangeValues
  );
  const page = searchParams.get("page") || "1";
  const price_from = searchParams.get("price_from") || null;

  const queryParams = {
    districts: houseFilterRange?.districts || null,
    bedroom_from: houseFilterRange?.bedroom_from || null,
    bedroom_to: houseFilterRange?.bedroom_to || null,
    room_from: houseFilterRange?.room_from || null,
    room_to: houseFilterRange?.room_to || null,
    area_from: houseFilterRange?.area_from || null,
    area_to: houseFilterRange?.area_to || null,
    price_from: houseFilterRange?.price_from || price_from,
    price_to: houseFilterRange?.price_to || null,
    page: page || null,
  };

  useEffect(() => {
    const getHouse = async () => {
      const response = await axios.get(`https://api.roommategeorgia.ge/flats`, {
        params: queryParams,
      });
      setHouse(response.data.data);
    };
    const nonNullParams = Object.fromEntries(
      Object.entries(queryParams).filter(([key, value]) => value !== null)
    );
    const queryString = new URLSearchParams(nonNullParams).toString();
    router.push(`/house?${queryString}`);

    getHouse();
  }, [houseFilterRange]);

  return (
    <>
      <div className="w-full flex flex-start bg-[#eee8e8]">
        <Image
          src={FilterIcon}
          alt="Filter Icon"
          className="cursor-pointer"
          onClick={() => dispatch(setHouseFilter(!houseFilter))}
        />
      </div>
      <div
        style={{
          position: "absolute",
          transform: houseFilter ? "translateX(0%)" : "translateX(-120%)",
          zIndex: 330000,
          transition: "0.3s",
        }}
      >
        <HouseFilter />
      </div>

      <div className="w-full flex flex-col items-center justify-center  px-3 py-5 bg-[#eee8e8] md:grid md:grid-cols-2 md:gap-6">
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
    </>
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
