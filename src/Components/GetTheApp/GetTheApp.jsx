import React from "react";
import { GooglePlaySVG, AppStoreSVG } from "../../Assets/SVGs/SvgIcons";

const GetTheApp = () => {
  return (
    <div className="flex p-5 pb-10 items-center gap-24 justify-center max-md:gap-10 max-sm:flex-col">
      <h2 className="text-gray-600 text-3xl font-semibold max-lg:text-2xl max-md:text-xl max-sm:text-3xl max-sm:p-5 max-sm:tracking-widest">Download the App</h2>
      <div className="flex space-x-6 !m-0 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6 max-sm:items-start ">
      
        <a 
          href="https://play.google.com/store" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center bg-black text-white rounded-lg px-4 py-6 w-40 h-12"
        >
          <span className="mr-2">{GooglePlaySVG}</span>
          <div className="text-left">
            <p className="text-[9px]">ANDROID APP ON</p>
            <p className="text-sm font-semibold">Google Play</p>
          </div>
        </a>

        <a 
          href="https://www.apple.com/app-store/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center bg-black text-white rounded-lg px-4 py-6 w-40 h-12"
        >
          <span className="mr-2">{AppStoreSVG}</span>
          <div className="text-left">
            <p className="text-[9px]">iOS APP ON</p>
            <p className="text-sm font-semibold">App Store</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GetTheApp;