"use client";
import Image from "next/image";
import PC from "/public/images/pc.png";
import SearchLoop from "/public/images/search-loop.png";
import Deal from "/public/images/deal.png";

export default function SectionTwo() {
  return (
    <>
      <div className="flex bg-[#f7f7f7]  min-h-screen flex-col items-center  md:pl-10 md:pr-5 xl:px-20">
        <div
          style={{ marginTop: "-320px" }}
          className="w-full items-center flex flex-col"
        >
          <h1 className="text-white  text-xl md:text-2xl xl:text-3xl">
            How It Works
          </h1>
          <div className="flex flex-col items-center  w-full md:flex-row xl:justify-between">
            <div className=" px-5 bg-white py-6 mt-[60px]  rounded-md  shadow-md shadow-gray-400 w-[300px] h-[330px] flex flex-col items-center justify-center">
              <Image src={PC} alt="PC icon" className="mb-20" />
              <span className=" text-[#484848] text-md text-center">
                Create profile
              </span>
            </div>
            <div
              className=" px-5 bg-white py-6 mt-[60px]  rounded-md  shadow-md shadow-gray-400 w-[300px] h-[330px] flex flex-col items-center justify-center
            md:ml-[-20px]  md:mb-[-50px]"
            >
              <Image src={SearchLoop} alt="PC icon" className="mb-20" />
              <span className=" text-[#484848] text-md text-center">
                Choose your preferred criteria and find a roommate
              </span>
            </div>
            <div
              className=" px-5 bg-white py-6 mt-[60px]  rounded-md  shadow-md shadow-gray-400 w-[300px] h-[330px] flex flex-col items-center justify-center
             md:ml-[-20px] "
            >
              <Image src={Deal} alt="PC icon" className="mb-20" />
              <span
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                className="text-[#484848] text-md text-center"
              >
                Learn about them through their profile and contact them
              </span>
            </div>
            <div
              className=" px-5 bg-white py-6 mt-[60px]  rounded-md  shadow-md shadow-gray-400 w-[300px] h-[330px] flex flex-col items-center justify-center
             md:ml-[-20px]  md:mb-[-50px]"
            >
              <Image src={PC} alt="PC icon" className="mb-20" />
              <span className=" text-[#484848] text-md text-center">
                Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
