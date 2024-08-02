import React from "react";
interface PRIMARY_HEADING {
  textName: string;
  className?: string;
}

const PrimaryHeading = ({ className, textName }: PRIMARY_HEADING) => {
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
