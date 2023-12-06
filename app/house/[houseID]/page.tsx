'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useState } from 'react'

export default function HouseID() {
 const params = useParams()

 const [houseID, setHouseID] = useState([])

 useEffect(() => {
  const getHouseId = async () => {
   const response = await axios.get(
    `https://api.roommategeorgia.ge/flats/view/${params.houseID}`
   )
   setHouseID(response.data)
  }
  getHouseId()
 }, [])

 console.log(houseID)
 return (
  <div className="w-full h-min-h-screen flex flex-col items-center px-3">
   lado
  </div>
 )
}
