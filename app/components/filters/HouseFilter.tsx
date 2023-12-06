import axios from "axios";
import { useEffect, useState } from "react";
import ArrowDown from "../../../public/images/arrow-down.png";
import Image from "next/image";
import FilterLoop from "../../../public/images/filter-loop.png";
import {
  RootState,
  setHouseFilter,
  setRangeValuesRedux,
} from "@/redux/houseFilterSlice";
import { useDispatch, useSelector } from "react-redux";
interface DataType {
  title: string;
}
interface FilterType {
  title: string;
  search_type: string;
  data: DataType[];
}
export default function HouseFilter() {
  const [filterList, setFilterList] = useState<FilterType[]>([]);
  const [rangeValues, setRangeValues] = useState({});
  const [select, setSelect] = useState(false);
  const houseFilter = useSelector(
    (state: RootState) => state.houseFilter.houseFilter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getFilters = async () => {
      const response = await axios.get(
        "https://api.roommategeorgia.ge/flats/filters"
      );
      setFilterList(response.data);
    };
    getFilters();
  }, []);

  const handleRangeChange = (title: string, value: string) => {
    setRangeValues((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  };

  return (
    <>
      <div className=" w-screen bg-white px-4 py-4 rounded-md  rounded-t-none flex flex-col items-start h-[400px]  justify-between  ">
        {filterList.map((item, index) => (
          <div key={index} className="flex flex-col w-full">
            <div
              className="absolute right-6 top-2"
              onClick={() => dispatch(setHouseFilter(!houseFilter))}
            >
              x
            </div>
            <label htmlFor={item.title}>{item.title}</label>
            {item.search_type === "choice" && (
              <div
                onClick={() => setSelect(!select)}
                className="w-full bg-[#e3e3e3] cursor-pointer flex flex-row justify-between items-center px-3 py-3"
              >
                <button className="text-xs">Choice</button>
                <Image
                  src={ArrowDown}
                  alt="Arrow down icon"
                  style={{ transform: select ? "none" : "rotate(180deg)" }}
                />
              </div>
            )}
            {item.search_type === "range" && (
              <div className="flex flex-row justify-between items-center w-[50%] overflow-hidden">
                <input
                  type="number"
                  placeholder="Start"
                  className="mr-2 w-[50%]"
                  onChange={(e) =>
                    handleRangeChange(
                      item.title === "საძინებელი"
                        ? "bedroom_from"
                        : item.title === "ოთახი"
                        ? "room_from"
                        : item.title === "ფასი"
                        ? "price_from"
                        : item.title === "საერთო ფართი"
                        ? "area_from"
                        : item.title,
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  placeholder="End"
                  className="w-[50%]"
                  onChange={(e) =>
                    handleRangeChange(
                      item.title === "საძინებელი"
                        ? "bedroom_to"
                        : item.title === "ოთახი"
                        ? "room_to"
                        : item.title === "ფასი"
                        ? "price_to"
                        : item.title === "საერთო ფართი"
                        ? "area_to"
                        : item.title,
                      e.target.value
                    )
                  }
                />
              </div>
            )}
          </div>
        ))}
        {select && (
          <div className="absolute bg-[#f9f6f6] top-[86px] w-[90%] h-[270px] overflow-y-scroll">
            {filterList.map((item) => (
              <>
                {item.data &&
                  item.data.map((obj, index) => (
                    <label key={index} className="flex flex-row">
                      <input type="checkbox" />
                      {obj.title}
                    </label>
                  ))}
              </>
            ))}
          </div>
        )}
        <div className="w-full  rounded-md bg-[#19A463]  py-3 flex flex-row items-center justify-center">
          <Image
            src={FilterLoop}
            alt="Filter loop icon"
            width={20}
            height={20}
          />
          <span
            className="ml-2 text-white text-xs"
            onClick={() => dispatch(setRangeValuesRedux(rangeValues))}
          >
            Filter
          </span>
        </div>
      </div>
    </>
  );
}
