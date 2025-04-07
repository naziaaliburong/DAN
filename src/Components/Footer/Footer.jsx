import React from "react";
import { danLogo } from "../../Assets/SVGs/SvgIcons";
import { contactIcons } from "../../Assets/SVGs/SvgIcons";
import { footerData } from "../../Assets/FooterData/FooterData";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-start gap-8 max-md:flex-col max-md:items-center max-md:text-center p-5">
        <div>
          <span>{danLogo}</span>
        </div>

        {footerData.map((section, index) => (
          <div key={index}>
            <h2 className="font-bold text-2xl">{section.title}</h2>
            {section.links ? (
              <ul className="mt-2 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            ) : (
              <>
                <p>{section.description}</p>
                <p className="mt-2">{section.subDescription}</p>
                <div className="flex justify-center gap-10 mt-4 max-md:gap-2">
                  {contactIcons.map((icon, iconIndex) => (
                    <span key={iconIndex}>{icon}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-sm mt-10">
        &copy; 2024 DAN. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;