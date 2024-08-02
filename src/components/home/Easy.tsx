import React from "react";
import { EASY_TABS_DATA } from "../common/Helper";
import PrimaryHeading from "../common/PrimaryHeading";
interface Easy_Tab {
  numb: number;
  heading: string;
  para: string
}

const Easy = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-[1180px] pt-[124px] pb-[101px]">
        <PrimaryHeading textName="As Easy As" className="!text-white text-center"/>
        <div className="row">
          {EASY_TABS_DATA.map((data: Easy_Tab, index) => (
            <div className="col-4 border-l-[2px] border-[#2E2E2E] min-h-[215px]" key={index}>
              <div className="pl-6 pt-6">
                <div className="size-11 rounded-lg bg-light_black flex justify-center items-center">
                  <p className=" font-jakarta font-semibold text-2xl text-white">{data.numb}</p>
                </div>
                <p className=" font-jakarta font-semibold text-xl text-white opacity-80 mt-4">{data.heading}</p>
                <p className=" mt-2">{data.para}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="max-w-[640px]">
            <div className="size-[82px] bg-light_red rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Easy;
