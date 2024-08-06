import PrimaryHeading from "../common/PrimaryHeading";
import Image from "next/image";
import { MEET_OUR_TEAM } from "../common/Helper";
import Paragraph from "../common/Paragraph";

interface MeetOurTeam {
  // img: string;
  para: string;
  name: string;
  profession: string;
}
const MeetOurTeam = () => {
  return (
    <div className="pt-[152px] pb-[124px]">
      <div className="container max-w-[1180px]">
        <PrimaryHeading
          className="text-center pb-[52px]"
          textName="Meet Our Team"
        />
        {MEET_OUR_TEAM.map((obj: MeetOurTeam, index: number) => (
          <div key={index}>
            {/* <Image
              src={obj.img}
              width={259}
              height={259}
              alt="meet-our-team-slider-img"
              className="pointer-events-none"
            /> */}
            <div className="shadow-8xl py-[30px] px-12 rounded-2xl">
              <Paragraph
                className="max-w-[980px] text-center !text-charcoal_gray pb-6"
                textName={obj.para}
              />
              <p className="font-semibold text-[32px] leading-10 text-dark_red text-center pb-0.5">
                {obj.name}
              </p>
              <Paragraph
                className="!text-charcoal_gray text-center"
                textName={obj.profession}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
