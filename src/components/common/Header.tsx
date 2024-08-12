"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { NAV_LINKS_LIST } from "../common/Helper";
import { Navcross, Navline } from "./Icon";

interface NavLink {
  url: string;
  navlink: string;
}

const Header = () => {
  const [nav, setNav] = useState(true);
  const pathname = usePathname(); // Get current path

  const handleNavbar = () => {
    setNav(!nav);
    let body = document.body;
    nav && body.classList.add("max-lg:overflow-hidden");
    !nav && body.classList.remove("max-lg:overflow-hidden");
  };

  return (
    <nav className="bg-pink 2xl:max-w-[1920px] mx-auto">
      <div className="container max-w-[1180px]">
        <div className="flex items-center justify-between py-6">
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
            className="flex flex-col lg:hidden justify-between w-[36px] h-[22px] z-30 cursor-pointer common_transition"
            onClick={handleNavbar}
          >
            <span
              className={`w-[36px] h-[3px] bg-dark_red inline-block rounded common_transition ${!nav && "rotate-45 relative top-[8px] -right-px"
                } ${nav && "rotate-0"}`}
            ></span>
            <span
              className={`w-[36px] h-[3px] bg-dark_red rounded common_transition ${!nav && "hidden"
                } ${nav && "block"}`}
            ></span>
            <span
              className={`w-[36px] h-[3px] bg-dark_red inline-block rounded common_transition ${!nav && "-rotate-45 relative bottom-[11px] -right-px"
                } ${nav && "rotate-0"}`}
            ></span>
            <span className="md:hidden">{nav === false ? <Navcross /> : <Navline />}</span>
          </div>
          <div
            className={`${nav && "max-lg:left-[-100%]"} ${!nav && "max-lg:start-0"
              } flex gap-8 z-10 max-lg:bg-pink max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 common_transition`}
          >
            {NAV_LINKS_LIST.map((obj: NavLink, index: number) => (
              <Link
                key={index}
                href={obj.url}
                onClick={handleNavbar}
                className={`${pathname === obj.url && "gradient_text underline_gradient_active" } font-jakarta text-charcoal max-lg:text-2xl gradient_text_hover underline_gradient relative after:absolute after:h-[1px] after:w-full after:bottom-0 after:left-0 after:bg-mix_red after:rounded gradient_transition`}
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
