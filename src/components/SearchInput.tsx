"use client";

import { FiSearch } from "react-icons/fi";

interface searchValueProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchInput = ({ searchValue, setSearchValue }: searchValueProps) => {
  function handleSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }
  return (
    <div className="relative flex-1 h-full z-10">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3">
        <FiSearch />
      </div>
      <input
        type="search"
        id="search"
        className="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-primary focus:ring-emerald-500 focus:border-emerald-500 ring-1 focus:outline-none transition-colors"
        placeholder="Produto"
        style={{
          WebkitBoxShadow: "0 0 0 1000px #002828 inset",
          WebkitTextFillColor: "#ffffff",
        }}
        value={searchValue}
        onChange={handleSearchValue}
      />
    </div>
  );
};

export default SearchInput;
