import React from "react";
interface Paragraph {
  textName: string;
  className?: string;
}

const Paragraph = ({ className, textName }: Paragraph) => {
  return (
      <p className={`font-jakarta text-black leading-6 ${className}`}>
        {textName}
      </p>
  );
};

export default Paragraph;
