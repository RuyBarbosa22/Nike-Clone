const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl hover:-translate-y-4 transition-transform duration-500 ease-in-out${
          bigShoeImg === imgURL.bigShoe
            ? "shadow-2xl"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover w-[180px] h-[180px] max-sm:w-[160px] max-sm:h-[160px] max-md:w-[120px] max-md:h-[120px] max-xl:w-[180px] max-xl:h-[180px] rounded-xl'>
          <img
            src={imgURL.bigShoe}
            alt='shoe colletion'
            className="object-contain w-[95%] h-[95%]"
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;