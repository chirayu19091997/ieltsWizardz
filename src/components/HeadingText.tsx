import React from "react";

const HeadingText = ({ text }: { text: string }) => {
  return (
    <h2 className="text-3xl font-bold text-center text-gray-500 font-pj">
      {text}
    </h2>
  );
};

export default HeadingText;
