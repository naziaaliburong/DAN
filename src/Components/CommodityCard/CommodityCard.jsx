import React, { useRef } from 'react';
import fruits from "../../Assets/Images/fruits.jpg";
import { tickIcon } from '../../Assets/SVGs/SvgIcons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CommodityCard = ({ image, title, onClick, isSelectedOne }) => {
    const overlayRef = useRef(null);

    useGSAP(() => {
        gsap.to(overlayRef.current, {
            opacity: isSelectedOne ? 1 : 0,
            duration: 0.5,
            ease: "power2.out"
        });
    }, [isSelectedOne]);

    return (
        <div
            className="relative w-64 max-lg:w-52 max-md:w-60 max-sm:w-full h-44 max-lg:h-36 max-md:h-40 rounded-md overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <img src={image || fruits} alt={title} className="w-full h-full object-cover" />
            {isSelectedOne && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50" ref={overlayRef}>
                    <span className="text-white w-12 h-12">{tickIcon}</span>
                </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-2">
                <p className="text-white text-lg font-semibold">{title || "Fruits"}</p>
            </div>
        </div>
    );
};

export default CommodityCard;