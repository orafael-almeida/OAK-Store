"use client";

import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaFilter } from "react-icons/fa";

const FilterSelect = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean | null>(null);

  function handleDropdown() {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-primary border border-gray-300 hover:bg-emerald-800 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none font-medium rounded-lg text-sm px-4 py-5 text-center inline-flex items-center transition-colors h-full relative"
        type="button"
        onClick={handleDropdown}
      >
        <FaFilter />
        <FaArrowDown />
        {dropdownIsOpen && (
          <div className="absolute right-0 top-14 z-50 bg-emerald-800 text-white divide-y divide-gray-100 rounded-lg shadow drop-shadow-sm w-max">
            <ul className="py-2 text-sm flex flex-col">
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 justify-center items-center gap-2 hover:bg-emerald-400"
                >
                  Nome A-z
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 justify-center items-center gap-2 hover:bg-emerald-400 "
                >
                  Nome Z-a
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 justify-center items-center gap-2 hover:bg-emerald-400 "
                >
                  Preço {<FaArrowUp />}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 justify-center items-center gap-2 hover:bg-emerald-400 "
                >
                  Preço {<FaArrowDown />}
                </a>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default FilterSelect;
