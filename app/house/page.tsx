'use client'

import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import FilterIcon from '../../public/images/filter-slider.svg'
import CircularProgress from '@mui/material/CircularProgress'
import DoorIcon from '../../public/images/door.svg'
import { useRouter, useSearchParams } from 'next/navigation'
import HouseFilter from '../components/filters/HouseFilter'
import { RootState, setHouseFilter } from '@/redux/houseFilterSlice'
import { useDispatch, useSelector } from 'react-redux'
import LocationIcon from '../../public/images/location.svg'

interface ImageType {
 thumb: string
}

interface HouseType {
 room: number
 price: number
 id: string
 district: {
  title: string
 }
 images: ImageType[]
}

export default function Page() {
 const [house, setHouse] = useState<HouseType[] | null>(null)
 const searchParams = useSearchParams()
 const houseFilter = useSelector(
  (state: RootState) => state.houseFilter.houseFilter
 )
 const dispatch = useDispatch()
 const router = useRouter()
 const houseFilterRange = useSelector(
  (state: RootState) => state.houseFilter.rangeValues
 )
 const houseFilterSelected = useSelector(
  (state: RootState) => state.houseFilter.selectedValues
 )

 console.log('test', houseFilterSelected.უბანი, 'test2', houseFilterRange)
 const queryParams = {
  districts: houseFilterSelected?.უბანი || searchParams.get('districts'),
  bedroom_from:
   houseFilterRange?.bedroom_from || searchParams.get('bedroom_from'),
  bedroom_to: houseFilterRange?.bedroom_to || searchParams.get('bedroom_to'),
  room_from: houseFilterRange?.room_from || searchParams.get('room_from'),
  room_to: houseFilterRange?.room_to || searchParams.get('room_to'),
  area_from: houseFilterRange?.area_from || searchParams.get('area_from'),
  area_to: houseFilterRange?.area_to || searchParams.get('area_to'),
  price_from: houseFilterRange?.price_from || searchParams.get('price_from'),
  price_to: houseFilterRange?.price_to || searchParams.get('price_to'),
  page: searchParams.get('page') || '1',
 }

 const getHouse = async () => {
  try {
   const response = await axios.get(`https://api.roommategeorgia.ge/flats`, {
    params: queryParams,
   })

   setHouse(response.data.data)
  } catch (error) {
   console.error(error)
  }
 }

 useEffect(() => {
  const nonNullParams = Object.fromEntries(
   Object.entries(queryParams).filter(([_, value]) => value !== null)
  )
  const queryString = new URLSearchParams(
   nonNullParams as unknown as URLSearchParams
  ).toString()
  router.push(`/house?${queryString}`)
  console.log(queryString)
  getHouse()
 }, [houseFilterRange, houseFilterSelected])

 

 useEffect(() => {
  getHouse()
 }, [])

 return (
  <>
   <div
    className="lg:hidden"
    style={{
     position: 'absolute',
     transform: houseFilter ? 'translateX(0%)' : 'translateX(-120%)',
     zIndex: 330000,
     transition: '0.3s',
     top: 70,
    }}
   >
    <HouseFilter />
   </div>
   {house === null ? (
    <div className="w-full  min-h-screen flex justify-center items-center">
     <CircularProgress style={{ color: 'Green' }} />
    </div>
   ) : (
    <>
     <div className="w-full flex  items-center justify-center bg-[#F7F7F7]  pt-5 pb-2 md:px-12 lg:px-12 lg:flex-row destkop:px-60">
      <div className="flex items-center  w-[350px] md:flex-start md:w-full lg:hidden ">
       <Image
        src={FilterIcon}
        alt="Filter Icon"
        className="cursor-pointer"
        onClick={() => dispatch(setHouseFilter(!houseFilter))}
       />
      </div>
     </div>
     <div className="w-full min-h-screen flex flex-col items-start justify-center py-2 bg-[#F7F7F7] md:px-12 lg:flex-row  lg:px-12 desktop:px-60 ">
      <div className="hidden lg:flex lg:w-[350px]">
       <HouseFilter />
      </div>
      <div
       style={{
        filter: window.innerWidth < 1024 && houseFilter ? 'blur(5px)' : '',
       }}
       className="w-full h-full flex flex-col items-center justify-start gap-6   md:grid md:grid-cols-2 md:gap-6 md:items-start lg:ml-7 "
      >
       {house && house.length > 0 ? (
        house.map((item, index) => (
         <div
          key={index}
          className="w-[330px] bg-white  rounded-md flex flex-col  rounded-2 overflow-hidden  shadow-boxItem  md:w-full"
         >
          <div className="w-full relative">
           <Carousel responsive={responsive} infinite={true}>
            {item.images.map((image, i) => (
             <div
              onClick={() => router.push(`/house/${item.id}`)}
              key={i}
              style={{
               position: 'relative',
               width: '100%',
               height: '200px',
               cursor: 'pointer',
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
          <div
           onClick={() => router.push(`/house/${item.id}`)}
           className=" cursor-pointer"
          >
           <div className="flex flex-row items-center px-3 pb-2 pt-5 border-b border-[#acb2af]">
            <Image src={DoorIcon} alt="Door Icon" />
            <span className=" text-[black] ml-2 text-xs">
             number of rooms: {item.room}
            </span>
           </div>
           <div className="flex flex-row items-center justify-between px-3 py-3 ">
            <div className="flex flex-row items-center">
             <Image src={LocationIcon} alt="Location Icon" />
             <span className=" text-[black] ml-2 text-xs">
              Location: 
              {item.district.title}
             </span>
            </div>

            <span className=" text-[black] ml-2 text-xs">
             {item.price} total rent
            </span>
           </div>
          </div>
         </div>
        ))
       ) : (
        <div>item is zero</div>
       )}
      </div>
     </div>
    </>
   )}
  </>
 )
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
}
