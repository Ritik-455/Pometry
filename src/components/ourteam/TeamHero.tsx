import Image from "next/image";
import Paragraph from "../common/Paragraph";


const TeamHero = () => {
  return (
    <div className="py-10 md:py-20 xl:pt-5 xl:pb-[68px] bg-pink relative max-w-[1920px] mx-auto">
      <div className="w-[423px] h-[171px] bg-mix_red opacity-15 blur-[74px] absolute start-0 top-[90px] lg:block hidden"></div>
      <div className="container max-w-[1180px]">
        <div className="row">
          <div className="lg:col-6 w-full px-3 max-lg:justify-center flex">
            <Image
              width={436}
              height={436}
              src="/assets/images/ourteam/webp/hero-team-img.webp"
              alt="hero-team-image"
              className="max-sm:max-w-[250px] max-md:max-w-[290px] max-lg:max-w-[380px] pointer-events-none"
            />
          </div>
          <div className="lg:col-6 w-full px-3 flex flex-col justify-center lg:pt-0 pt-7">
            <h3 className="font-bold lg:text-[64px] md:text-5xl text-4xl lg:leading-[70px] md:leading-[55px] text-jet_black sm:pb-3 pb-2 capitalize max-lg:text-center">
              Meet Our team
            </h3>
            <Paragraph
              className="!text-charcoal_gray max-lg:text-center"
              textName="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum posuere tellus ut varius. Ut lacus arcu, ullamcorper laoreet lacus sed, sodales egestas purus."
            />
            <div className="absolute right-[5%] xl:right-[11%] 2xl:right-[10%] top-[25%] hidden lg:block">
              <Image
                width={98}
                height={101}
                src="/assets/images/ourteam/svg/vector-animated.svg"
                alt="ajsd"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[423px] h-[171px] bg-mix_red opacity-15 blur-[87px] absolute end-0 bottom-[18px] sm:block hidden"></div>
    </div>
  );
};

export default TeamHero;
