import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your email"
        className="bg-white text-gray-800 px-3 outline placeholder:text-black rounded-2xl h-8 w-60"
      />
    </div>
  );
};

export default SearchBar;
