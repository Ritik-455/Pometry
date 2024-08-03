import React from "react";
interface Paragraph {
  textName: string;
  className?: string;
}

const Paragraph = ({ className, textName }: Paragraph) => {
  return (
    <div>
      <p className={`font-jakarta text-black ${className}`}>{textName}</p>
    </div>
  );
};

export default Paragraph;
