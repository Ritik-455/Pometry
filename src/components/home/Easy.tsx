"use client"
import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab click
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="bg-jet_black">
      <div className="container max-w-[1180px] pt-[124px] pb-[101px]">
        <PrimaryHeading textName="As Easy As" className="!text-white text-center" />
        <div className="flex justify-center">
          <Paragraph textName="Ingest millions of rows per second from your relational database, CSV files, cloud storage or big data warehouses. No need to move or transform your data, simply point to your datasource!" className="!text-white opacity-80 max-w-[756px] text-center mt-3" />
        </div>
        <div className="row mt-14">
          {EASY_TABS_DATA.map((data: Easy_Tab, index) => (
            <div className={`${index === activeTab ? ' md:border-dark_red' : ' md:border-[#2E2E2E]'} col-4 md:border-l-[2px] min-h-[215px] cursor-pointer`} key={index} onClick={() => handleTabClick(index)}>
              <div className="lg:pl-6 pt-6">
                <div className={`${index === activeTab ? 'bg-mix_red' : 'bg-light_black'} size-11 rounded-lg flex justify-center items-center`}>
                  <p className=" font-jakarta font-semibold text-2xl text-white">{data.numb}</p>
                </div>
                <p className={`${index === activeTab ? 'opacity-100' : 'opacity-80'} font-jakarta font-semibold text-xl text-white opacity-80 mt-4`}>{data.heading}</p>
                <Paragraph textName={data.para} className=" mt-2 !text-white max-w-[316px] opacity-80" />
              </div>
            </div>
          ))}
        </div>
        {/* tab-1 content */}
        {activeTab === 0 && (
          <div className="">
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
          </div>
        )}
        {/* tab-2 content */}
        {activeTab === 1 && (
          <div className="">
            <div className="flex gap-4 mt-10">
              <div className="max-w-[558px] w-full bg-light_black p-4 border border-[#FFFFFF1F] rounded-[15px]">
                <p className="font-courier font-normal text-white text-sm">for monthly_view in graph<span className="text-green">.rolling</span>( &#34;<span className="text-yellow">1 month</span> &#34;) :</p>
                <p className="font-courier font-normal text-white text-sm mt-2">EntityResolution() -&#62; Scoring() -&#62; Alerting()</p>
                <p className="font-courier font-normal text-white text-sm mt-2">Save_to_Postgres()</p>
              </div>
              <div className="max-w-[558px] w-full bg-light_black p-4 pb-0 border border-[#FFFFFF1F] rounded-[15px]">
                <p className="font-courier font-normal text-white text-base">window(start: &#34;<span className="text-yellow">01/01/2023</span>&#34;, end: &#34;<span className="text-yellow">01/06/2023</span>&#34;)  &#123;</p>
                <p className="font-courier font-normal text-white text-base ml-3">nodes(type: &#34;<span className="text-yellow">company</span>&#34;) &#123;</p>
                <p className="font-courier font-normal text-white text-base ml-5">company_number, incorporation_date,</p>
                <p className="font-courier font-normal text-white text-base ml-5"><span className="text-green">neighbours</span>(type: &#34;<span className="text-yellow">directo</span>r&#34;) &#123;</p>
                <p className="font-courier font-normal text-white text-base ml-11">name, age, address</p>
                <p className="font-courier font-normal text-white text-base ml-3">&#125;</p>
                <p className="font-courier font-normal text-white text-base">&#125; </p>
                <p className="font-courier font-normal text-white text-base"><span className="text-green">algorithms</span> &#123;</p>
                <p className="font-courier font-normal text-white text-base ml-5">shell_detection &#44;</p>
                <p className="font-courier font-normal text-white text-base ml-5">pep_screening</p>
                <p className="font-courier font-normal text-white text-base ml-3">&#125;</p>
                <p className="font-courier font-normal text-white text-base">&#125; </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="max-w-[558px] w-full mt-6">
                <p className="font-jakarta font-semibold text-xl text-white w-full">Intuitive GraphQL end-points</p>
                <p className="font-jakarta text-base font-normal text-white max-w-[420px] mt-3">Explore your data using our intuitive GraphQL APIs and integrate with yourfront-end solutions within minutes</p>
              </div>
              <div className="max-w-[558px] w-full mt-6">
                <p className="font-jakarta font-semibold text-xl text-white w-full">Go beyond SQL with native Python support</p>
                <p className="font-jakarta text-base font-normal text-white max-w-[495px] mt-3">Run complex graph queries across time, extract machine learning featuresand feedback to your existing pipelines natively</p>
              </div>
            </div>
          </div>
        )}
        {/* tab-3 content */}
        {activeTab === 2 && (
          <div className="flex justify-center mt-10">
            <Image
              src="/assets/images/home/webp/discover.webp"
              height={537}
              width={1012}
              alt="Run"
              className="pointer-events-none"
            />
          </div>
        )}
      </div>
    </div >
  )
};

export default Easy;
