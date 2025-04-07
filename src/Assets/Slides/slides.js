import x from "../../Public/slider1.jpg";
import y from "../../Public/slider2.jpg";
import z from "../../Public/slider3.jpg";
import {GooglePlaySVG, AppStoreSVG }from "../SVGs/SvgIcons.js";

export const slides = [
  {
    id: 1,
    image: x,
    buttons: [{ text: "Explore More", position: "left-10 max-sm:left-5 max-xs:left-3 bottom-10 max-xs:bottom-6", style: "white" }],
  },
  {
    id: 2,
    image: y,
    buttons: [
      {
        text: ["GET IT ON", "Google Play"], 
        icon: GooglePlaySVG, 
        position: "left-[40%] max-lg:left-[38%] max-sm:left-[36%] max-xs:left-[8%] bottom-10 max-xs:bottom-6",
        style: "black",
      },
      {
        text: ["Download on the", "App Store"], 
        icon: AppStoreSVG, 
        position: "left-[60%] max-lg:left-[69%] max-sm:left-[64%] max-xs:left-[54%] bottom-10 max-xs:bottom-6",
        style: "black",
      },
    ],
  },
  {
    id: 3,
    image: z,
    buttons: [{ text: "Browse Now", position: "left-10 max-sm:left-5 max-xs:left-3 bottom-10 max-xs:bottom-6", style: "white" }],
  },
];
