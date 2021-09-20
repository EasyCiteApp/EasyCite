import React from "react";

const SearchBar = () => {
  return (
    <div className=" bg-white h-14 w-3/5 rounded-xl border border-gray-600 mt-10 px-4 py-2  text-gray-400 focus-within:text-gray-600 justify-center items-center">
      <form className="flex h-full w-full justify-center items-center focus:ring-0">
        <input
          type="text"
          name="search"
          className="h-full w-full px-2 bg-white  border-none focus:ring-0"
          placeholder="Search for anything"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
};

export default SearchBar;
