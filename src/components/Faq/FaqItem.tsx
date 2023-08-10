// @ts-nocheck
"use client";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Fade } from "react-reveal";
interface FaqItemProps {
  title: string;
  description: React.ReactNode;
}

const FaqItem = ({ title, description }: FaqItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full transition-all duration-200 bg-backgroundColor border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="flex text-lg font-semibold ">{title}</span>

        {isExpanded ? (
          <AiOutlineMinus className="text-gray-600" size={24} />
        ) : (
          <AiOutlinePlus className="text-gray-600" size={24} />
        )}
      </button>

      {isExpanded && (
        <Fade duration={500} top>
          <div className="px-4 pb-5 sm:px-6 sm:pb-6">{description}</div>
        </Fade>
      )}
    </div>
  );
};

export default FaqItem;
