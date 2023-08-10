import { serviceSections } from "@/utils/constants";
import React, { useState } from "react";

const ServicesHeader = ({
  activeIndex,
  setActiveIndex,
  activeSubTab,
  setActiveSubTab,
}: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navbar-center flex-none z-40 rounded-md shadow-lg border-primaryColor border bg-base-100">
      <ul className="menu menu-horizontal px-1">
        {serviceSections.map((item, index) =>
          item.subTabs.length <= 1 ? (
            <li
              key={`serviceheader-n-${index}`}
              className={`px-2 items-center flex justify-center hover:cursor-pointer ${
                activeIndex === index
                  ? "bg-primaryColor rounded-md text-white"
                  : ""
              }`}
              onClick={() => {
                setActiveIndex(index);
                setActiveSubTab(0);
              }}
            >
              {item.tab}
            </li>
          ) : (
            <li
              key={`serviceheader-n-${index}`}
              className={`dropdown ${
                activeIndex === index
                  ? "bg-primaryColor rounded-md text-white"
                  : ""
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <label tabIndex={0} className="px-2">
                {item.tab}
              </label>
              <ul
                tabIndex={isDropdownOpen ? 0 : undefined}
                className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-48"
              >
                {item.subTabs.map((subItem, subIndex) => (
                  <li
                    key={`serviceheader-s-${subIndex}`}
                    onClick={() => {
                      setActiveIndex(index);
                      setActiveSubTab(subIndex);
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                    className={`hover:cursor-pointer px-1 ${
                      activeIndex === index && activeSubTab === subIndex
                        ? "border border-primaryColor rounded-md text-black"
                        : "text-black"
                    }`}
                  >
                    {subItem.tab}
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ServicesHeader;
