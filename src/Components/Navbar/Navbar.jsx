import React, { useState} from "react";
import { HomeIcon, icons, loginIcons } from "../../Assets/SVGs/SvgIcons";
import ToggleButton from "../ToggleButton/ToggleButton";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onLoginClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMarketPlaceClick = (index) =>{
    setActiveIndex(index);
    index===0 && navigate("/");
    index===1 && navigate("/marketplace");
    index===2 && navigate("/chat");
  }

  return (
    <nav className="bg-custom-gradient py-4 h-22 text-white text-sm max-md:px-5">
      <div className="flex justify-between items-center px-6 md:px-10">
        <div>{HomeIcon}</div>
      
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰ 
        </button>

        <div className="hidden md:flex gap-5">
          <ul className="flex gap-5">
            {icons.map((icon, index) => (
              <li
                className={`flex gap-2 border-b-2 pb-3 ${
                  activeIndex === index ? "border-white" : "border-transparent"
                }`}
                key={index}
                onClick={()=>handleMarketPlaceClick(index)}
              >
                {icon.svg}
                <span>{icon.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex gap-5 items-center">
          <ul className="flex gap-5" onClick={onLoginClick}>
            {loginIcons.map((icon, index) => (
              <li className="flex gap-2" key={index}>
                {icon.svg}
                <span>{icon.name}</span>
              </li>
            ))}
          </ul>
          <ToggleButton />
        </div>
      </div>

      {menuOpen && (
        <HamburgerMenu handleMarketPlaceClick={handleMarketPlaceClick} activeIndex={activeIndex} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onLoginClick={onLoginClick}/>
      )}
    </nav>
  );
};

export default Navbar;