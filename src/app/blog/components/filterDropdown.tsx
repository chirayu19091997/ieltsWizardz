import { getTags } from "@/utils/contentful";
import React, { useState } from "react";

const FilterDropdown = async ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: any;
}) => {
  const options = await getTags();

  return (
    <ul className="menu menu-horizontal rounded-lg bg-base-200 space-x-1">
      <li onClick={() => setActiveFilter("")}>
        <a className={activeFilter === "" ? "active" : ""}>All</a>
      </li>
      {options.map((item) => (
        <li key={item.name} onClick={() => setActiveFilter(item.name)}>
          <a className={activeFilter === item.name ? "active" : ""}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FilterDropdown;
