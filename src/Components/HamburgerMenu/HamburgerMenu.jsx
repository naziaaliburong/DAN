import React, { useRef } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton';
import { icons, loginIcons } from '../../Assets/SVGs/SvgIcons';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HamburgerMenu = ({handleMarketPlaceClick, activeIndex, menuOpen, setMenuOpen, onLoginClick}) => {

  const menuRef = useRef(null);
  useGSAP(() => {
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, { dependencies: [menuOpen], revertOnUpdate: true });
 
  return (
    <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full bg-black/90 text-white p-5 z-50"
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>

          <ul className="flex flex-col gap-5 mt-10">
            {icons.map((icon, index) => (
              <li
                className={`flex gap-2 border-b-2 pb-3 ${
                  activeIndex === index ? "border-white" : "border-transparent"
                }`}
                key={index}
                onClick={() => {
                  handleMarketPlaceClick(index);
                  setMenuOpen(false);
                }}
              >
                {icon.svg}
                <span>{icon.name}</span>
              </li>
            ))}
            {loginIcons.map((icon, index) => (
              <li className="flex gap-2" key={index} onClick={()=>{setMenuOpen(false); onLoginClick();}}>
                {icon.svg}
                <span>{icon.name}</span>
              </li>
            ))}
            <ToggleButton />
          </ul>
        </div>
  )
}

export default HamburgerMenu
