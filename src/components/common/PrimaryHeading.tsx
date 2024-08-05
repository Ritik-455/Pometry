import React from "react";
interface PrimaryHeading {
  textName: string;
  className?: string;
}

const PrimaryHeading = ({ className, textName }: PrimaryHeading) => {
  return (
    <h2
      className={`font-jakarta font-semibold xl:text-5xl md:text-[42px] sm:text-4xl text-3xl xl:!leading-[57.6px] md:!leading-[52px] sm:!leading-[48px] !leading-[35px] text-jet_black ${className}`}
    >
      {textName}
    </h2>
  );
};

export default PrimaryHeading;
