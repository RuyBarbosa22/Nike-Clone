import { useState } from "react";
import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import "../index.css";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative z-10">
      <div className="relative xl:w-2/5 flex flex-col justify-center lg:items-start items-center w-full max-xl:padding-x pt-20">
        <p className="text-lg pt-16 font-semibold font-montserrat text-[#ea553b]">
          Novos lançamentos
        </p>

        <h1 className="mt-0 font-palanquin text-[72px] text-center max-sm:text-[72px] max-sm:leading-[82px]
        max-md:text-[72px] md:text-6xl max-sm:text-wrap max-md:text-nowrap lg:text-[82px] lg:text-start font-bold">
          <span className="md:whitespace-nowrap relative z-10 sm:pr-10">Descubra o novo</span>
          <br />
          <span className="text-[#ea553b] inline-block mt-0">Air Max</span> DN
        </h1>
        <p className="font-montserrat text-slate-gray text-nowrap text-lg leading-8 mt-6 max-sm:text-wrap max-sm:text-center mb-14 sm:max-w-sm">
          A próxima geração da tecnologia Air está aqui.
        </p>

        <Button label='Compre agora' iconURL={arrowRight} height="h-[40px] w-[220px] max-sm:h-[50px] max-sm:w-[240px] max-lg:w-[320px] md:h-[40px] md:w-[300px]" backgroundColor="bg-[#ea553b]" textColor="text-white" />

        <div className="flex items-center max-sm:justify-center max-md:justify-center max-lg:justify-center xl:w-[600px] 2xl:z-10 flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div className="flex flex-col items-center" key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex max-sm:flex-col justify-center items-center xl:min-h-screen max-sm:pt-16 max-md:pt-20 max-lg:pt-20 max-xl:pt-20 bg-cover bg-center z-0 ">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          className="object-contain relative xl:ml-40 max-sm:h-[300px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[520px] 2xl:h-[620px] xl:mt-20 xl:pr-24 2xl:pr-4"
        />

        <div className="flex gap-4 sm:absolute max-sm:grid max-sm:grid-cols-2 max-md:grid-cols-3 max-md:top-[100%] max-lg:top-[100%] max-xl:top-[100%] -bottom-[14%] xl:left-[37%] 2xl:left-[50%] pt-24">
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
