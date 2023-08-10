//@ts-nocheck
"use client";
import { DirectContacts, Socials } from "@/utils/constants";
import { Slide } from "react-reveal";
import Link from "next/link";
import React from "react";

const Highlighter = () => {
  return (
    <Slide top>
      <div className="flex justify-between w-full bg-primaryColor">
        <div></div>
        <ul className="flex space-x-2 p-2">
          {DirectContacts.map((item) => (
            <li key={`direct-${item.title}`}>
              <Link
                href={item.route}
                target="_blank"
                title={item.title}
                className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
              >
                {item.logo}
              </Link>
            </li>
          ))}
          {Socials.map((item) => (
            <li key={`socials-${item.title}`}>
              <Link
                href={item.route}
                target="_blank"
                title={item.title}
                className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
              >
                {item.logo}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Slide>
  );
};

export default Highlighter;
