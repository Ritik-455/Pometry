import React from "react";
import { EASY_TABS_DATA } from "../common/Helper";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import { CloudCoin, Coin, Document, Star } from "../common/Icon";
import Image from "next/image";
interface Easy_Tab {
  numb: number;
  heading: string;
  para: string
}

const Easy = () => {
  return (
    <div className="bg-jet_black">
      <div className="container max-w-[1180px] pt-[124px] pb-[101px]">
        <PrimaryHeading textName="As Easy As" className="!text-white text-center" />
        <div className="flex justify-center">
          <Paragraph textName="Ingest millions of rows per second from your relational database, CSV files, cloud storage or big data warehouses. No need to move or transform your data, simply point to your datasource!" className="!text-white opacity-80 max-w-[756px] text-center mt-3" />
        </div>
        <div className="row mt-14">
          {EASY_TABS_DATA.map((data: Easy_Tab, index) => (
            <div className="col-4 border-l-[2px] border-[#2E2E2E] min-h-[215px]" key={index}>
              <div className="pl-6 pt-6">
                <div className="size-11 rounded-lg bg-light_black flex justify-center items-center">
                  <p className=" font-jakarta font-semibold text-2xl text-white">{data.numb}</p>
                </div>
                <p className=" font-jakarta font-semibold text-xl text-white opacity-80 mt-4">{data.heading}</p>
                <Paragraph textName={data.para} className=" mt-2 !text-white opacity-80 max-w-[316px]" />
              </div>
            </div>
          ))}
        </div>
        {/* tab-1 content */}
        <div className="flex justify-center mt-10">
          <div className="max-w-[640px] flex justify-between w-full">
            <div className="size-[82px] bg-light_red rounded-[20px] flex justify-center items-center">
              <Document />
            </div>
            <div className="size-[82px] bg-light_red rounded-[20px] flex justify-center items-center">
              <CloudCoin />
            </div>
            <div className="size-[82px] bg-light_red rounded-[20px] flex justify-center items-center">
              <Star />
            </div>
            <div className="size-[82px] bg-light_red rounded-[20px] flex justify-center items-center">
              <Coin />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/home/webp/Run-queries.webp"
            height={195}
            width={640}
            alt="Run"
          />
          <div className="max-w-[596px] w-full bg-light_black p-[35px_43px_24px_43px] border border-[#FFFFFF1F] rounded-[15px]">
            <p className="text-xl font-jakarta text-white">Run Queries / Analysis</p>
            <p className="text-sm text-white font-courier mt-6 font-normal">Graph.<span className="text-green">.rangeQuery &#40;</span></p>
            <p className="text-sm text-white font-courier mt-1 font-normal">Algorithm = AnomalyDetetioon(),</p>
            <p className="font-courier font-normal text-bright_yellow mt-1 text-sm"><span className=" text-white">FROM = </span> 1 <span className=" text-white">Jan </span>2001 12:00:00,</p>
            <p className="font-courier font-normal text-bright_yellow mt-1 text-sm"><span className=" text-white">To = </span> 1 <span className=" text-white">Jan </span>2015 12:00:00,</p>
            <p className="font-courier font-normal text-white mt-1 text-sm">Increment<span className=" text-bright_yellow"> = 1 </span> hour,</p>
            <p className="font-courier font-normal text-white mt-1 text-sm">Windows = [<span className="text-green">1</span> Hour, <span className="text-green">1</span> Day, <span className="text-green"> 1 </span> Week, <span className="text-green"> 1 </span> Month, <span className="text-green"> 1 </span> Year] <span className="block">&#41;</span></p>
            <p className="font-courier font-normal text-white mt-1 text-sm">&#47;&#47; Algorithm defined once, run on over 650,000 views of the data in seconds!</p>
          </div>
        </div>
        {/* tab-2 content */}
        <div className="flex gap-4">
          <div className="max-w-[558px] w-full bg-light_black p-4 border border-[#FFFFFF1F] rounded-[15px]">
            <p className="font-courier font-normal text-white text-sm">for monthly_view in graph<span className="text-green">.rolling</span>( &#34;<span className="text-yellow">1 month</span> &#34;) :</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Easy;
