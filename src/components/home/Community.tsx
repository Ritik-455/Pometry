import Link from "next/link";
import React from "react";
import { SOCIAL_ICON } from "../common/Helper";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";

const Community = () => {
  return (
    <div className="py-[152px] 2xl:max-w-[1920px] mx-auto">
      <div className="container xl:max-w-[1180px]">
        <div className="w-full py-[88px] rounded-[32px] shadow-3xl bg-mix_red">
          <div className="max-w-[827px] mx-auto text-center">
            <PrimaryHeading
              textName="Join Our Community"
              className="!text-white mb-3"
            />
            <Paragraph
              className="!text-white mb-6"
              textName="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitae accumsan ut, dictum et leo."
            />
            <div className="flex items-center justify-center w-full gap-3">
              {SOCIAL_ICON.map((value, index) => (
                <Link
                  key={index}
                  href={value.link}
                  target="_blank"
                  className="size-[42px] bg-white rounded-[57px] flex items-center justify-center duration-300 ease-linear hover:shadow-4xl"
                >
                  <span>{value.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
