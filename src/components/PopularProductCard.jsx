import { useState } from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex flex-1 flex-col w-auto max-sm:w-full max-md:w-full transition-transform rounded-xl p-4 mt-12 max-sm:mt-0 
        shadow-xl ${isHovered ? "md:shadow-2xl md:-translate-y-1" : "md:shadow-none"} 
        md:hover:translate-y-[-5px] md:hover:shadow-2xl`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imgURL} alt={name} className="w-full" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl max-md leading-normal text-slate-gray">
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

export default PopularProductCard;
