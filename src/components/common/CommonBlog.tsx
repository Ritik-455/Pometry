import React from "react";
import PrimaryHeading from "./PrimaryHeading";
import Image from "next/image";
import Paragraph from "./Paragraph";

const CommonBlog = () => {
  return (
    <div className="xl:pb-[152px] md:py-20 py-16 2xl:max-w-[1920px] mx-auto">
      <div className="container xl:max-w-[1180px] pt-[50px]">
        <PrimaryHeading
          textName="Latest Blogs"
          className="mb-[52px] text-center"
        />
        <div className="h-[498px]">
          <div className="p-4 h-[453px] max-w-[366px] w-full rounded-xl bg-white border border-grey">
            <Image
              src="/assets/images/home/webp/blog-img-1.webp"
              alt="blog-image"
              width={334}
              height={225}
              rel="preload"
              className="rounded-lg mb-[10px]"
            />
            <div>
              <p className="font-jakarta font-semibold text-2xl leading-8 text-black mb-[2px]">
                Making Decisions with data Analytics
              </p>
              <Paragraph
                className="opacity-80"
                textName="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet"
                redText="Read more..."
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-[6px]">
                <Image
                  src="/assets/images/home/svg/blog_profile.svg"
                  alt="blog-profile"
                  width={32}
                  height={32}
                />
                <p className="opacity-80 font-jakarta font-normal text-sm leading-5 text-black">
                  Joy Ban
                </p>
              </div>
              <p className="opacity-80 font-jakarta font-normal text-sm leading-5 text-black">
                02 May 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBlog;
