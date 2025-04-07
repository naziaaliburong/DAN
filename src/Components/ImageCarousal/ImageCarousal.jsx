import React, { useState, useCallback } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { slides } from "../../Assets/Slides/slides";

const buttonStyles = {
  base: "font-semibold px-6 py-3 rounded-lg shadow-md transition absolute flex items-center gap-3",
  white: "bg-white text-teal-700 border-2 border-teal-700 hover:bg-teal-700 hover:text-white",
  black: "bg-black text-white hover:bg-gray-800",
};

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = useCallback((index) => setCurrentSlide(index), []);

  return (
    <div className="relative w-[95%] max-lg:w-[90%] max-sm:w-[85%] max-xs:w-[80%] mx-auto my-10">
      <Carousel
        selectedItem={currentSlide}
        onChange={handleSlideChange}
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
      >
        {slides.map(({ id, image, buttons }) => (
          <div key={id} className="relative h-[450px] max-sm:h-[336px] max-xs:h-[228px]">
            <img src={image} alt="Slide" className="w-full h-full object-cover max-sm:object-contain"/>
            {buttons.map(({ text, icon, position, style }, index) => (
              <button
                key={index}
                className={`${buttonStyles.base} ${buttonStyles[style]} ${position} flex items-center justify-center w-56 h-15 max-sm:w-40`}
              >
                {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
                {Array.isArray(text) ? (
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-xs max-sm:hidden">{text[0]}</span>
                    <span className="text-sm font-bold">{text[1]}</span>
                  </span>
                ) : (
                  text
                )}
              </button>
            ))}
          </div>
        ))}
      </Carousel>

      <div className="mt-5 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition ${
              currentSlide === index ? "bg-teal-700" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;