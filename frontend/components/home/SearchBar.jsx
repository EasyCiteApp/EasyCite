import React from "react";
import CitationType from "./CitationType";

const SearchBar = ({citationStyles, handleStyleSelected, handleInputChange, handleInputSubmit}) => {
  return (
    <div className=" bg-white h-14 w-full md:w-3/5 lg:w-3/5 rounded-full border border-gray-600 mt-10 px-4 py-2  text-gray-600 focus-within:text-gray-600 justify-center items-center">
      <form onSubmit={handleInputSubmit} className="flex h-full w-full justify-center items-center focus:ring-0">
        <CitationType citationStyles={citationStyles} handleStyleSelected={handleStyleSelected}/>
        <input
          type="text"
          name="search"
          className="h-full w-full px-2 bg-white  border-none focus:ring-0 focus:outline-none "
          placeholder="Search for anything"
          onChange={handleInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2"
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
