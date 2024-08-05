import PrimaryHeading from "./PrimaryHeading";
import Image from "next/image";
import Paragraph from "./Paragraph";
import { BLOG_DATA } from "./Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowIcon } from "./Icon";
import Link from "next/link";

const CommonBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="xl:pb-[152px] md:pb-20 pb-16 2xl:max-w-[1920px] mx-auto">
      <div className="container xl:max-w-[1180px] md:pt-[50px] sm:pt-8 relative z-30">
        <PrimaryHeading
          textName="Latest Blogs"
          className="xl:mb-[52px] lg:mb-12 sm:mb-10 mb-7 text-center"
        />
        <span className="absolute lg:right-[30%] md:right-[22%] right-[18%] top-0 -z-20 sm:block hidden">
          <ArrowIcon />
        </span>
        <div className="flex gap-5 lg:flex-row flex-col justify-center max-lg:items-center">
          {BLOG_DATA.map((value, index) => (
            <div
              key={index}
              className="p-4 sm:min-h-[453px] max-w-[366px] w-full rounded-xl bg-white border border-grey flex flex-col justify-between"
            >
              <div>
                <Image
                  src={value.blogImage}
                  alt="blog-image"
                  width={334}
                  height={225}
                  rel="preload"
                  className="rounded-lg mb-[10px] pointer-events-none"
                />
                <p className="font-jakarta font-semibold sm:text-2xl text-xl leading-6 sm:leading-8 text-jet_black">
                  {value.blogTitle}
                </p>
              </div>
              <div className="mt-[2px]">
                <Paragraph
                  className="opacity-80 !text-black"
                  textName="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet"
                  redText={<Link href="/">Read more...</Link>}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src={value.blogProfile}
                      alt="blog-profile"
                      width={32}
                      height={32}
                      className="cursor-pointer pointer-events-none"
                    />
                    <p className="opacity-80 font-jakarta font-normal text-sm leading-5 text-jet_black">
                      Joy Ban
                    </p>
                  </div>
                  <p className="opacity-80 font-jakarta font-normal text-sm leading-5 text-jet_black">
                    02 May 2024
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonBlog;
