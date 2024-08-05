import Link from "next/link";
import { FOOTER_ELLIPSE, FOOTER_ITEMS, SOCIAL_ICON } from "./Helper";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="xl:pt-[100px] md:pt-20 pt-16 lg:pb-8 pb-5 overflow-hidden bg-black 2xl:max-w-[1920px] mx-auto relative z-30">
      <div className="container xl:max-w-[1180px]">
        <div className="row !-mx-3">
          <div className="w-full lg:col-4 px-3">
            <Link href="/" className="!w-fit">
              <Image
                src="/assets/images/home/svg/footer-logo.svg"
                width={236}
                height={53}
                alt="page-logo"
                className=" inline-block"
              />
            </Link>
            <div className="flex items-center w-full gap-3 mt-4">
              {SOCIAL_ICON.map((value, index) => (
                <Link
                  key={index}
                  href={value.link}
                  target="_blank"
                  className="size-[42px] bg-cosmic_black rounded-[57px] flex flex-col items-center justify-center duration-300 ease-linear hover:shadow-5xl"
                >
                  <span>
                    {React.cloneElement(value.icon, {
                      iconColor: "white",
                    })}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:col-8 px-3 mt-12 lg:mt-0">
            <div className="lg:flex xl:gap-11 lg:gap-9 lg:justify-end max-lg:row max-lg:!-mx-3 justify-between">
              {FOOTER_ITEMS.map((value, index) => (
                <ul
                  key={index}
                  className={`flex flex-col sm:gap-3 gap-2 lg:w-fit ${value.columnClass}`}
                >
                  <li className="mb-1 text-base font-normal leading-6 font-jakarta text-white">
                    {value.titleName}
                  </li>
                  {value.items.map((data, index) => (
                    <li key={index}>
                      <Link
                        href="/"
                        className="opacity-70 duration-300 ease-linear hover:opacity-100 text-base font-normal leading-6 font-jakarta text-white text-nowrap"
                      >
                        {data}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="xl:mt-[98px] pt-16 text-center lg:text-end">
          <p className="font-jakarta font-normal text-sm leading-5 text-white opacity-70">
            Copyright © 2023 Pometry. All rights reserved
          </p>
        </div>
      </div>
      {/* ellipse */}
      {FOOTER_ELLIPSE.map((value, index) => (
        <div
          key={index}
          className={`opacity-15 bg-mix_red absolute pointer-events-none -z-20 ${value.className}`}
        ></div>
      ))}
    </div>
  );
};

export default Footer;
