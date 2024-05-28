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
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.bigShoe}
            alt='shoe colletion'
            className='object-contain h-[140px]'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;