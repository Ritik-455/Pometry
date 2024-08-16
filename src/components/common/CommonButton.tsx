interface Button {
  textName: string;
  className?: string;
}

const CommonButton = ({ className, textName }: Button) => {
  return (
    <button
      className={`font-jakarta font-semibold text-white rounded border border-transparent py-[10px] md:py-3 px-[20px] md:px-[30px] bg-mix_red hover:bg-none hover:border-dark_red hover:text-dark_red transition-all duration-300 ease-linear ${className}`}
    >
      {textName}
    </button>
  );
};

export default CommonButton;
