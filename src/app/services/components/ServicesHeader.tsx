import { serviceSections } from "@/utils/constants";
import React, { useState } from "react";

const ServicesHeader = ({
  activeIndex,
  setActiveIndex,
  activeSubTab,
  setActiveSubTab,
}: any) => {
  return (
    <div className="navbar-center z-40 rounded-md shadow-lg border-primaryColor border bg-base-100">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {serviceSections.map((item, index) =>
            item.subTabs.length <= 1 ? (
              <li
                key={`serviceheader-n-${index}`}
                className={
                  activeIndex === index
                    ? "bg-primaryColor rounded-md text-white"
                    : ""
                }
                onClick={() => {
                  setActiveIndex(index);
                  setActiveSubTab(0);
                }}
              >
                <a>{item.tab}</a>
              </li>
            ) : (
              <li
                key={`serviceheader-n-${index}`}
                className={
                  activeIndex === index
                    ? "bg-primaryColor rounded-md text-white"
                    : ""
                }
              >
                <details className="dropdown">
                  <summary tabIndex={0}>{item.tab}</summary>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {item.subTabs.map((subItem, subIndex) => (
                      <li
                        key={`serviceheader-s-${subIndex}`}
                        onClick={() => {
                          setActiveIndex(index);
                          setActiveSubTab(subIndex);
                        }}
                        className={
                          activeSubTab === subIndex
                            ? "border border-primaryColor rounded-md text-black"
                            : "text-black"
                        }
                      >
                        <a>{subItem.tab}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ServicesHeader;
