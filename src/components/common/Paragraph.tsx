import { ReactNode } from "react";

interface Paragraph {
  textName: string;
  className?: string;
  redText?: ReactNode;
}

const Paragraph = ({ className, textName, redText }: Paragraph) => {
  return (
    <p className={`text-jet_black leading-6 ${className}`}>
      {textName} <span className="text-dark_red">{redText}</span>
    </p>
  );
};

export default Paragraph;
