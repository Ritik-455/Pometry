interface PrimaryHeading {
  textName: string;
  className?: string;
}

const PrimaryHeading = ({ className, textName }: PrimaryHeading) => {
  return (
      <h2
        className={`font-semibold xl:text-5xl md:text-[42px] sm:text-4xl text-3xl sm:leading-[57px] text-jet_black ${className}`}
      >
        {textName}
      </h2>
  );
};

export default PrimaryHeading;
