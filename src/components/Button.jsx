const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, width, height }) => {
  const defaultStyles = "text-white bg-[#ea553b] w-[360px] h-[40px]";
  const customStyles = `${backgroundColor || ""} ${textColor || ""} ${borderColor || ""} ${width || "w-full"} ${height || ""}`;
  const hoverStyles = iconURL 
    ? "hover:shadow-lg"
    : "hover:shadow-xl";  // Shadow for non-icon buttons

  return (
    <button
      className={`relative flex justify-center items-center gap-2 border-none font-montserrat text-lg leading-none
      ${backgroundColor || textColor || borderColor || width || height ? customStyles : defaultStyles}
      rounded-full overflow-hidden transition-all duration-500 ease-out ${hoverStyles}
      `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 animate-move-icon"
        />
      )}
    </button>
  );
};

export default Button;
