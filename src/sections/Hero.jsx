import { useState } from "react";

import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-0'>
        <p className='text-2xl font-montserrat text-coral-red'>
          Novos lançamentos
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Descubra o novo 
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Air Max</span> DN
        </h1>
        <p className='font-montserrat text-slate-gray text-nowrap text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          A próxima geração da tecnologia Air está aqui.
        </p>

        <Button label='Compre agora' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          className='object-contain relative z-10 xl:ml-40 lg:h-[600px]'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[8%] sm:left-[35%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;