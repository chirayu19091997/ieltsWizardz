"use client";
import React, { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface FaqItemProps {
  title: string;
  description: React.ReactNode;
}

const FaqItem = ({ title, description }: FaqItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full transition-all duration-200 bg-backgroundColor rounded-lg border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="flex text-lg font-semibold ">{title}</span>

        {isExpanded ? (
          <IconMinus className="text-gray-600" size={24} />
        ) : (
          <IconPlus className="text-gray-600" size={24} />
        )}
      </button>

      {isExpanded && (
        <div className="animate__animated animate__fadeInDown animate__faster px-4 pb-5 sm:px-6 sm:pb-6">
          {description}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
