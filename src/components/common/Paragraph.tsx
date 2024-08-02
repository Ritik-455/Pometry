import React from "react";
interface PARAGRAPH {
  textName: string;
  className?: string;
}

const Paragraph = ({ className, textName }: PARAGRAPH) => {
  return (
    <div>
      <p className={`font-jakarta text-black ${className}`}>{textName}</p>
    </div>
  );
};

export default Paragraph;
