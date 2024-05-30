import { offer } from "../assets/images";
import Button from '../components/Button';
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 max-sm:pl-[16%] max-sm:w-[100%] max-sm:scale-125 max-sm:mt-10">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full max-sm:justify-center" />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl lg:max-w-lg font-bold max-sm:text-center'>
          Novas camisas do <span className='text-[#ea553b]'> Corinthians</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text max-sm:text-center'>
          Fundado por operários, a história do time se mistura com
          a história negra, carregando na sua essência a luta pelos trabalhadores,
          pela democracia e pelo povo.
        </p>
        <p className='mt-6 lg:max-w-lg info-text max-sm:text-center'>
          E as novas camisas do Corinthians são um símbolo da luta antirracista no
          futebol. Sabemos que ainda há muito a ser feito, mas quanto mais aliados,
          melhor. Vamos juntos ajudar a transformar o futebol num espaço com mais
          respeito - dentro e fora de campo.
        </p>
        <div className='mt-11 flex flex-wrap gap-4 max-sm:justify-center'>
          <Button label='Ver coleção' iconURL={arrowRight} backgroundColor="bg-[#ea553b]" borderColor="border-slate-gray" textColor="text-white " width="w-[240px]" height="max-sm:h-[50px]" />
          <Button label='Saiba mais' backgroundColor="bg-black" borderColor="none" textColor="text-white" width="w-[240px]" height="h-[40px] max-sm:h-[50px]" />

        </div>
      </div>

    </section>
  )
}

export default SpecialOffer
