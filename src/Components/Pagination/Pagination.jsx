import React from "react";
import { prevIcon } from "../../Assets/SVGs/SvgIcons";

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12 ">
      <button 
        className="px-2 py-2 border-[1.5px] border-teal-700 rounded-md" 
        onClick={onPrev} 
        disabled={currentPage === 1}
      >
        {prevIcon}
      </button>
      <button 
        className="w-40 text-2xl font-bold px-4 py-1 bg-teal-700 border-[1.5px] border-teal-700 rounded-md text-white" 
        onClick={onNext} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};

export default Pagination;