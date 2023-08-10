import React from "react";

interface PillProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Pill = ({ text, isActive, onClick }: PillProps) => {
  return (
    <p
      className={`p-2 m-1 px-4 rounded-full shadow-md border cursor-pointer ${
        isActive ? "bg-primaryColor" : "bg-slate-100"
      } ${isActive ? "text-secondaryTextColor" : "text-primaryTextColor"}`}
      onClick={onClick}
    >
      {text}
    </p>
  );
};

export default Pill;
