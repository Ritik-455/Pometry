import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS_LIST } from "../common/Helper";
interface NavLink {
  href: string;
  nav_tabs: string;
}

const Header = () => {
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
          <div className="flex gap-8">
            {NAV_LINKS_LIST.map((obj: NavLink, index: number) => (
              <Link
                key={index}
                href={obj.href}
                className="font-jakarta text-black opacity-90 hover:"
              >
                {obj.nav_tabs}
              </Link>
            ))}
          </div>
          <button className="font-jakarta font-semibold text-dark_red py-[10px] px-8 border border-dark_red rounded">
            Start Building
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
