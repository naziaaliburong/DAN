import React from "react";
import { searchIcon } from "../../Assets/SVGs/SvgIcons";
import {Link} from "react-router-dom";
const CreateSearchTrade = () => {
  return (
    <div className="flex items-center justify-between p-10 pt-5 mb-10 border-b text-center max-md:justify-between">
      <div className="text-teal-700 text-2xl font-medium max-lg:text-lg max-md:hidden">
        <span>Home &gt; </span>Market Place
      </div>
      <div className="flex items-center space-x-4 max-md:w-full max-md:justify-center">
        <Link to="/createtrade"><button className="bg-teal-700 text-white px-10 py-1 rounded-sm max-md:px-4">
          Create Trade
        </button>
        </Link>
        <div className="relative flex items-center border border-gray-300 rounded-sm pl-4 py-1 gap-20 max-md:gap-0">
            {searchIcon}
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none border-none max-md:w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateSearchTrade;
