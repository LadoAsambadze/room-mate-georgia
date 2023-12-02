"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function House() {
  const [house, setHouse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let size = 5;

  useEffect(() => {
    const getHouse = async () => {
      const response = await axios.get("https://api.roommategeorgia.ge/flats");
      setHouse(response.data.data);
    };
    getHouse();
  }, []);

  const currentItems = house.slice(
    (currentPage - 1) * size,
    currentPage * size
  );

  const totalPages = Math.ceil(house.length / size);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full  min-h-screen  grid  grid-col-1 gap-6  items-center px-[10%] sm:px-[15%] py-3 bg-[#eee8e8]  md:grid-cols-2 ">
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="w-full bg-white h-[320px] rounded-md flex flex-col rounded-2 overflow-hidden shadow-2xl shadow-#7f7878-400">
            <div className="w-full h-[65%] relative" key={index}>
              <Image
                src={item.images[0].original}
                alt="Banner"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-row items-center px-3 py-3 border-b-2 border-[gray]">
              <span className=" text-[black]">
                number of rooms: {item.room}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between px-3 py-3 ">
              <span>Location: {item.district.title} </span>
              <span className=" text-[black]">{item.price}</span>
            </div>
          </div>
        ))}
      <div className="pagination">
        {[...Array(totalPages)].map((page, i) => (
          <button onClick={() => changePage(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}
