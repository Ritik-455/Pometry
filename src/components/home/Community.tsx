import Link from "next/link";
import React from "react";
import { TwitterIcon } from "../common/Icon";

const Community = () => {
  return (
    <div className="py-[152px] 2xl:max-w-[1920px] mx-auto">
      <div className="container xl:max-w-[1180px]">
        <div className="w-full py-[88px] rounded-[32px] shadow-3xl bg-mix_red">
          <div className="max-w-[827px] mx-auto">
            <div className="flex items-center justify-center w-full gap-3">
              <Link
                href="/"
                className="size-[42px] bg-white rounded-[57px] flex items-center justify-center duration-300 ease-linear"
              >
                <span>
                  <TwitterIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
