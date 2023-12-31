import axios from 'axios'
import { useEffect, useState } from 'react'
import ArrowDown from '../../../public/images/arrow-down.png'
import Image from 'next/image'
import FilterLoop from '../../../public/images/filter-loop.png'
import {
 RootState,
 setHouseFilter,
 setRangeValuesRedux,
 setSelectedValuesRedux,
} from '@/redux/houseFilterSlice'
import { useDispatch, useSelector } from 'react-redux'

interface DataType {
 title: string
 id: string
}
interface FilterType {
 id: string
 title: string
 search_type: string
 data: DataType[]
}
export default function HouseFilter() {
 const [filterList, setFilterList] = useState<FilterType[]>([])
 const [rangeValues, setRangeValues] = useState<
  Record<string, string | number>
 >({})

 const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>(
  {}
 )
 const [select, setSelect] = useState(false)
 const houseFilter = useSelector(
  (state: RootState) => state.houseFilter.houseFilter
 )
 const dispatch = useDispatch()

 useEffect(() => {
  const getFilters = async () => {
   const response = await axios.get(
    'https://api.roommategeorgia.ge/flats/filters'
   )
   setFilterList(response.data)
  }
  getFilters()
 }, [])

 const handleRangeChange = (title: string, value: string) => {
  setRangeValues((prevState) => ({
   ...prevState,
   [title]: value,
  }))
 }

 const handleSelectChange = (
  title: string,
  value: any,
  isChecked: boolean
 ) => {
  setSelectedValues((prevState) => {
   if (isChecked && !prevState[title]?.includes(value)) {
    return { ...prevState, [title]: [...(prevState[title] || []), value] }
   } else if (!isChecked && prevState[title]?.includes(value)) {
    return {
     ...prevState,
     [title]: prevState[title].filter((item) => item !== value),
    }
   } else {
    return prevState
   }
  })
 }



 return (
  <>
   <div
    className="relative overflow-hidden w-screen bg-white px-4 py-4 rounded-md  rounded-t-none flex flex-col items-start h-full justify-between
   xl:bg-[#F7F7F7]  "
   >
    {filterList.map((item, index) => (
     <div key={index} className="flex flex-col w-full">
      <div
       className="  lg:hidden absolute right-6 top-2"
       onClick={() => dispatch(setHouseFilter(!houseFilter))}
      >
       x
      </div>
      <label htmlFor={item.title} className="text-base">
       {item.title}
      </label>
      {item.search_type === 'choice' && (
       <div
        onClick={() => setSelect(!select)}
        className="w-full bg-[#e3e3e3] cursor-pointer mb-[10px] mt-1 px-3 py-[8px] flex flex-row justify-between items-center overflow-hidden rounded-md
        lg:px-3 lg:py-3"
       >
        <button className="text-xs">Choice</button>
        <Image
         src={ArrowDown}
         alt="Arrow down icon"
         style={{
          transform: select ? 'none' : 'rotate(180deg)',
         }}
        />
       </div>
      )}
      {item.search_type === 'range' && (
       <div
        className="flex flex-row justify-between items-center w-full overflow-hidden lg:justify-between
       "
       >
        <input
         type="number"
         placeholder="Start"
         className="w-[50%] mr-2 lg:mr-3 mt-1 bg-[#E3E3E3] rounded-md outline-none no-spinners  mb-[10px] px-2 py-1 text-[14px] 
         lg:px-3 lg:py-2 "
         onChange={(e) =>
          handleRangeChange(
           item.title === 'საძინებელი'
            ? 'bedroom_from'
            : item.title === 'ოთახი'
            ? 'room_from'
            : item.title === 'ფასი'
            ? 'price_from'
            : item.title === 'საერთო ფართი'
            ? 'area_from'
            : item.title,
           e.target.value
          )
         }
        />

        <input
         type="number"
         placeholder="End"
         className="w-[50%] bg-[#E3E3E3] mt-1 rounded-md  outline-none no-spinners  mb-[10px] px-2 py-1 text-[14px] lg:px-3 lg:py-2 "
         onChange={(e) =>
          handleRangeChange(
           item.title === 'საძინებელი'
            ? 'bedroom_to'
            : item.title === 'ოთახი'
            ? 'room_to'
            : item.title === 'ფასი'
            ? 'price_to'
            : item.title === 'საერთო ფართი'
            ? 'area_to'
            : item.title,
           e.target.value
          )
         }
        />
       </div>
      )}
     </div>
    ))}

    <div
     style={{ display: select ? 'block' : 'none' }}
     className="absolute mr-2 bg-[#d6d1d1] rounded-sm  px-3 py-3 top-20 lg:top-[93px] w-[93%] h-[290px] overflow-y-scroll "
    >
     {filterList.map((item) => (
      <>
       {item.data &&
        item.data.map((obj, index) => (
         <label key={index} className="flex flex-row">
          <input
           type="checkbox"
           className="mr-1"
           onChange={(e) =>
            handleSelectChange(item.title, obj.id, e.target.checked)
           }
          />

          {obj.title}
         </label>
        ))}
      </>
     ))}
    </div>

    <div
     onClick={() => {
      dispatch(setRangeValuesRedux(rangeValues))
      dispatch(setHouseFilter(!houseFilter))
      dispatch(setSelectedValuesRedux(selectedValues))
     }}
     className="w-full  rounded-md bg-[#19A463]  py-3 flex flex-row items-center justify-center mt-5 cursor-pointer
      "
    >
     <Image src={FilterLoop} alt="Filter loop icon" width={20} height={20} />
     <span className="ml-2 text-white text-xs ">Filter</span>
    </div>
   </div>
  </>
 )
}
