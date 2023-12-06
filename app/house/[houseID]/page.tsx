'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function HouseID() {
 const params = useParams()

 useEffect(() => {
  const getHouseId = async () => {
   const response = await axios.get(
    `https://api.roommategeorgia.ge/flats/view/${params.houseID}`
   )
   console.log(response)
  }
  getHouseId()
 }, [])
 
 return (
  <div className="w-full h-min-h-screen flex flex-col items-center px-3">
   lado
  </div>
 )
}
