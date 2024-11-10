import { useState } from "react";
import Search from "../assets/Search.svg";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-full max-w-xs">
      {!inputValue && (
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
          <img src={Search} alt="search icon" />
        </span>
      )}

      <input
        type="text"
        placeholder="Olivia Rhye"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-[90%] pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm"
      />
    </div>
  );
};

export default SearchInput;
