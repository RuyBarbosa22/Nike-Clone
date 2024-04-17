const Button = ({label, iconURL}) => {
  return (
    <button className=" w-[360px] h-[40px] flex justify-center items-center gap-2 border-none font-montserrat text-lg leading-none rounded-full text-white bg-coral-red">
        {label}

        <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />
    </button>
)
}

export default Button
