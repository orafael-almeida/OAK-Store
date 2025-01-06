// src/components/FilterSelect.tsx
"use client";

import { useState } from "react";
import { FaArrowDown, FaArrowUp, FaFilter } from "react-icons/fa";

interface FilterSelectProps {
  onSort: (filter: string) => void;
}

const FilterSelect = ({ onSort }: FilterSelectProps) => {
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
                <div
                  className="flex px-4 py-2 justify-center items-center gap-2 hover:bg-emerald-400"
                  onClick={() => onSort("name-asc")}
                >
                  Nome A-z
                </div>
              </li>
              <li>
                <div
                  className="flex px-4 py-2 justify-center items-center gap-2 hover:bg-emerald-400 "
                  onClick={() => onSort("name-desc")}
                >
                  Nome Z-a
                </div>
              </li>
              <li>
                <div
                  className="flex px-4 py-2 justify-center items-center gap-2 hover:bg-emerald-400 "
                  onClick={() => onSort("price-asc")}
                >
                  Preço {<FaArrowDown />}
                </div>
              </li>
              <li>
                <div
                  className="flex px-4 py-2 justify-center items-center gap-2 hover:bg-emerald-400 "
                  onClick={() => onSort("price-desc")}
                >
                  Preço {<FaArrowUp />}
                </div>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default FilterSelect;
