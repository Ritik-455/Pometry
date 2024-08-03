import React from "react";
interface PrimaryHeading {
  textName: string;
  className?: string;
}

const PrimaryHeading = ({ className, textName }: PrimaryHeading) => {
  return (
    <div>
      <h2
        className={`font-jakarta font-semibold text-5xl leading-[57px] text-jet_black ${className}`}
      >
        {textName}
      </h2>
    </div>
  );
};

export default PrimaryHeading;
