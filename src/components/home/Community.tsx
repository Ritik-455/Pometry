import Link from "next/link";
import { SOCIAL_ICON } from "../common/Helper";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import Image from "next/image";

const Community = () => {
  return (
    <div className="xl:py-[152px] md:py-20 py-16 2xl:max-w-[1920px] mx-auto">
      <div className="container xl:max-w-[1180px]">
        <div className="w-full lg:py-[88px] md:py-[60px] sm:py-12 py-10 px-6 rounded-[32px] shadow-3xl bg-mix_red relative z-30 overflow-hidden">
          <div className="max-w-[790px] mx-auto text-center">
            <PrimaryHeading
              textName="Join Our Community"
              className="!text-white mb-3 max-sm:leading-9"
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
                  className="size-[42px] bg-white rounded-[57px] flex items-center justify-center duration-300 ease-linear hover:shadow-5xl"
                >
                  <span>{value.icon}</span>
                </Link>
              ))}
            </div>
          </div>
          {/* layer */}
          <Image
            src="/assets/images/home/webp/community-layer.webp"
            alt="layer"
            width={1166}
            height={522}
            rel="preload"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
