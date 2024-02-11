import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="flex items-center justify-around h-1/5">
      <input
        type="text"
        placeholder="Enter"
        className="w-9/12 h-2/6 rounded-full placeholder:text-center  placeholder:text-xl placeholder:text-black bg-white opacity-80 text-center text-xl focus:placeholder:opacity-0 border-2 border-gray-400 outline-none"
      />
      <div className="w-1/12 h-2/6 bg-white opacity-80 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700">
        <FaSearch />
      </div>
    </div>
  );
}
