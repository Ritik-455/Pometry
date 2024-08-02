"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS_LIST } from "../common/Helper";
interface NavLink {
  href: string;
  nav_tabs: string;
}

const Header = () => {
  const [nav, setNav] = useState(true);

  return (
    <nav>
      <div className="container">
        <div className="flex items-center justify-between pt-6">
          <Link href="" aria-label="header-logo">
            <Image
              width={157}
              height={36}
              src="/assets/images/home/webp/pometry-logo.webp"
              alt="pometry-logo"
              className="pointer-events-none"
            />
          </Link>
          <div className="flex flex-col lg:hidden">
            <span
              className={`w-[36px] h-[3px] bg-dark_red inline-block rounded`}
            ></span>
            <span
              className={`w-[36px] h-[3px] bg-dark_red inline-block rounded my-2`}
            ></span>
            <span
              className={`w-[36px] h-[3px] bg-dark_red inline-block rounded`}
            ></span>
          </div>

          <div
            className={`${nav && "max-lg:left-[-100%]"} ${
              !nav && "max-lg:start-0"
            } flex gap-8 max-lg:bg-white max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0`}
          >
            {NAV_LINKS_LIST.map((obj: NavLink, index: number) => (
              <Link
                key={index}
                href={obj.href}
                className="font-jakarta text-black opacity-90 gradient_text transition duration-300 ease-linear"
              >
                {obj.nav_tabs}
              </Link>
            ))}
          </div>
          <button className="font-jakarta font-semibold text-dark_red py-[10px] px-8 border border-dark_red rounded hover:bg-dark_red hover:text-white transition duration-300 ease-linear">
            Start Building
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
