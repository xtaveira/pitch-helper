import React from "react";

type ButtonType = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonType) => {
  return (
    <button
      className="py-2 w-[40%] lg:w-[20%] border-2 border-black rounded-full hover:bg-black hover:text-white hover:border-2 hover:border-white bg-white text-black"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
