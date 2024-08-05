import React from "react";
interface PrimaryHeading {
  textName: string;
  className?: string;
}

const PrimaryHeading = ({ className, textName }: PrimaryHeading) => {
  return (
      <h2
        className={`font-jakarta font-semibold xl:text-5xl md:text-[42px] sm:text-4xl text-3xl leading-10 sm:leading-[57px] text-jet_black ${className}`}
      >
        {textName}
      </h2>
  );
};

export default PrimaryHeading;
