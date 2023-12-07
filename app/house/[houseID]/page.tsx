'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'

import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

export default function HouseID() {
 const params = useParams()

 const [houseID, setHouseID] = useState<[] | null>(null)

 useEffect(() => {
  const getHouseId = async () => {
   const response = await axios.get(
    `https://api.roommategeorgia.ge/flats/view/${params.houseID}`
   )
   setHouseID(response.data)
  }
  getHouseId()
 }, [])

 return (
  <>
   {houseID === null ? (
    <div className="w-full min-h-screen flex justify-center items-center">
     <CircularProgress style={{ color: 'Green' }} />
    </div>
   ) : (
    <div className="flex flex-col items-center px-5 py-4 w-full min-h-screen bg-[#F7F7F7]">
     <div className="w-full">
      <Carousel></Carousel>
     </div>
    </div>
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

const responsive2 = {
 desktop: {
  breakpoint: { max: 4000, min: 1440 },
  items: 5,
 },
 tablet: {
  breakpoint: { max: 1440, min: 768 },
  items: 5,
 },
 tabletOne: {
  breakpoint: { max: 768, min: 430 },
  items: 5,
 },
 mobile: {
  breakpoint: { max: 430, min: 0 },
  items: 5,
 },
}
