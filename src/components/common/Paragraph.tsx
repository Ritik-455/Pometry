import React from "react";
interface PARAGRAPH {
  textName: string;
  className?: string;
  redText?: string;
}

const Paragraph = ({ className, textName, redText }: PARAGRAPH) => {
  return (
    <div>
      <p className={`font-jakarta text-jet_black ${className}`}>
        {textName} <span className="text-dark_red">{redText}</span>
      </p>
    </div>
  );
};

export default Paragraph;
