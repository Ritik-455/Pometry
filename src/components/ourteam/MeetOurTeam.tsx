import PrimaryHeading from "../common/PrimaryHeading";
import Image from "next/image";
// import { MEET_OUR_TEAM } from "../common/Helper";

interface MeetOurTeam {
  img: string;
}
const MeetOurTeam = () => {
  return (
    <div className="pt-[152px] pb-[124px]">
      <div className="container max-w-[1180px]">
        <PrimaryHeading
          className="text-center pb-[52px]"
          textName="Meet Our Team"
        />
        {/* {MEET_OUR_TEAM.map((obj: MeetOurTeam, index: number) => (
          <div key={index}>
            <Image
              src={obj.img}
              width={259}
              height={259}
              alt="meet-our-team-slider-img"
              className="pointer-events-none"
            />
          </div>
        ))} */}
        ;
      </div>
    </div>
  );
};

export default MeetOurTeam;
