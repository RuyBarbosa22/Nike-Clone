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
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center sm:items-start w-full max-xl:padding-x pt-20">
        <p className="text-lg sm:text-2xl pt-10 sm:pt-8 font-semibold font-montserrat text-[#ea553b]">
          Novos lançamentos
        </p>

        <h1 className="mt-6 md:mt-10 font-palanquin text-8xl text-center sm:text-left max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white md:whitespace-nowrap relative z-10 sm:pr-10">Descubra o novo</span>
          <br />
          <span className="text-[#ea553b] inline-block mt-3 max-sm:mt-0">Air Max</span> DN
        </h1>
        <p className="font-montserrat text-slate-gray text-nowrap text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          A próxima geração da tecnologia Air está aqui.
        </p>

        <Button label='Compre agora' iconURL={arrowRight} height="h-[40px] max-sm:h-[50px]" backgroundColor="bg-[#ea553b]" textColor="text-white" />

        <div className="flex items-center max-sm:justify-center xl:justify-start-items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div className="flex flex-col items-center" key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex max-sm:flex-col justify-center items-center xl:min-h-screen max-sm:pt-16 bg-cover bg-center z-0 ">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          className="object-contain relative xl:ml-40 max-sm:h-[300px] md:h-[400px] lg:h-[500px]"
        />

        <div className="flex max-sm:justify-evenly gap-4 sm:absolute -bottom-[14%] xl:left-[36.5%] pt-24">
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
