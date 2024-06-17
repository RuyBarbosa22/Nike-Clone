import React, { useState } from "react";
import { star } from "../assets/icons";
import { useMediaQuery } from 'react-responsive';

const PopularProductCardMobile = ({ imgURL, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 475 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex flex-1 flex-col w-auto transition-transform rounded-xl p-4 mt-6 mb-6 
        shadow-xl ${isHovered ? "shadow-2xl -translate-y-1" : "shadow-none"} 
        hover:translate-y-[-5px] hover:shadow-2xl`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ minWidth: isMobile ? '70%' : '40%' }} // Corrigindo a interpolação do estilo
    >
      <img src={imgURL} alt={name} className="w-full" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {4.8}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl leading-relaxed font-semibold text-[#ea553b]">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCardMobile;
