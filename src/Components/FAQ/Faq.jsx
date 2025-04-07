import React, { useState } from "react";
import { questionAnswerObject } from "../../Assets/QuestionAnswerObject/QuestionAnswerObject";
import { plusMinus } from "../../Assets/SVGs/SvgIcons";

const Faq = () => {
  const [activeId, setActiveId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col items-center m-5">
        <h2 className="text-[43px] font-bold">FAQ</h2>
        <p className="text-gray-500 text-lg">Need Help?</p>
      </div>
      <div className="w-[70%] max-lg:w-[100%] p-5">
        {questionAnswerObject.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="flex flex-col m-2 w-full border-[1.33px] rounded-lg border-teal-700 p-4 pl-10 pr-10 text-2xl max-md:text-xl max-sm:text-lg max-sm:pl-5 max-sm:pr-5"
          >
            <div className="flex items-end justify-between w-full">
              <p className="text-slate-700">{item.question}</p>
              <p
                className="pointer"
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
              >
                {plusMinus[activeId === item.id ? 1 : 0]}
              </p>
            </div>
            {activeId === item.id && (
              <div>
                <p className="text-slate-600 pt-4">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {visibleCount < questionAnswerObject.length && (
        <div className="m-5 w-44">
          <button
            onClick={handleViewMore}
            className="bg-teal-700 text-white w-full text-2xl rounded-md font-semibold p-[2px]"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Faq;