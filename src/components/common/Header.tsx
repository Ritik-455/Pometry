"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS_LIST } from "../common/Helper";
interface NavLink {
  url: string;
  navlink: string;
}

const Header = () => {
  const [nav, setNav] = useState(true);

  const HANDLE_NAVBAR = () => {
    setNav(!nav);
    let body = document.body;
    nav && body.classList.add("max-lg:overflow-hidden");
    !nav && body.classList.remove("max-lg:overflow-hidden");
  };

  return (
    <nav className="bg-faint_pink 2xl:max-w-[1920px] mx-auto">
      <div className="container max-w-[1180px]">
        <div className="flex items-center justify-between pt-6">
          <Link href="/" aria-label="header-logo">
            <Image
              width={157}
              height={36}
              src="/assets/images/home/webp/pometry-logo.webp"
              alt="pometry-logo"
              className="pointer-events-none"
            />
          </Link>
          <div
            className="flex flex-col lg:hidden justify-between w-[36px] h-[22px] z-30 cursor-pointer transition-all ease-linear duration-300"
            onClick={HANDLE_NAVBAR}
          >
            <span
              className={`w-[36px] h-[3px] bg-dark_red inline-block rounded transition-all ease-linear duration-300 ${
                !nav && "rotate-45 relative top-[8px] -right-px"
              } ${nav && "rotate-0"}`}
            ></span>
            <span
              className={`w-[36px] h-[3px] bg-dark_red rounded transition-all ease-linear duration-300 ${
                !nav && "hidden"
              } ${nav && "block"}`}
            ></span>
            <span
              className={`w-[36px] h-[3px] bg-dark_red inline-block rounded transition-all ease-linear duration-300 ${
                !nav && "-rotate-45 relative bottom-[11px] -right-px"
              } ${nav && "rotate-0"}`}
            ></span>
          </div>
          <div
            className={`${nav && "max-lg:left-[-100%]"} ${
              !nav && "max-lg:start-0"
            } flex gap-8 z-10 max-lg:bg-faint_pink max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 transition-all ease-linear duration-300`}
          >
            {NAV_LINKS_LIST.map((obj: NavLink, index: number) => (
              <Link
                key={index}
                href={obj.url}
                onClick={HANDLE_NAVBAR}
                className="font-jakarta text-charcoal max-lg:text-2xl gradient_text_hover underline_gradient relative after:absolute after:h-[1px] after:w-full after:bottom-0 after:left-0 after:bg-mix_red after:rounded gradient_transition"
              >
                {obj.navlink}
              </Link>
            ))}
          </div>
          <button className="font-jakarta font-semibold text-dark_red py-[10px] px-8 border border-dark_red rounded hover:bg-mix_red hover:border-transparent hover:text-white transition duration-300 ease-linear max-lg:hidden">
            Start Building
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
