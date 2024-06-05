import { offer } from "../assets/images";
import Button from '../components/Button';
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse lg:flex-row gap-10 max-container">
      <div className="flex w-full max-sm:h-[45vh] md:h-[65vh] justify-center items-center max-sm:mt-0 max-md:mt-10 lg:w-[50%]">
        <img src={offer} className="w-full h-full object-contain items-center" />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl lg:max-w-lg font-bold max-sm:text-center max-md:text-center'>
          Novas camisas do <span className='text-[#ea553b]'>Corinthians</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text max-sm:text-justify md:text-justify'>
          Fundado por operários, a história do time se mistura com
          a história negra, carregando na sua essência a luta pelos trabalhadores,
          pela democracia e pelo povo.
        </p>
        <p className='mt-6 lg:max-w-lg info-text max-sm:text-justify max-md:text-justify'>
          E as novas camisas do Corinthians são um símbolo da luta antirracista no
          futebol. Sabemos que ainda há muito a ser feito, mas quanto mais aliados,
          melhor. Vamos juntos ajudar a transformar o futebol num espaço com mais
          respeito - dentro e fora de campo.
        </p>
        <div className='mt-11 flex flex-row max-sm:flex-wrap gap-4 max-sm:justify-center max-md:justify-between max-lg:justify-center'>
          <Button label='Ver coleção' iconURL={arrowRight} backgroundColor="bg-[#ea553b]" borderColor="border-slate-gray" textColor="text-white " width="w-[240px] max-sm:w-[240px] md:w-[48%] " height="max-sm:h-[50px]" />
          <Button label='Saiba mais' backgroundColor="bg-black" borderColor="none" textColor="text-white" width="w-[240px] max-sm:w-[240px] md:w-[48%]" height="h-[40px] max-sm:h-[50px]" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
