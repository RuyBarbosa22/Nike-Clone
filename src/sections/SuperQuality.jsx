import Button from '../components/Button';
import { airMax1, airMax2, airMax3, airMax4, airMax5, airMax6, airMax7 } from '../assets/images';
import Carousel from '../components/Carousel';

const slides = [airMax1, airMax2, airMax3, airMax4, airMax5, airMax6, airMax7];

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-nowrap max-sm:text-center max-md:text-center max-lg:text-left max-xl:text-left'>Nike<span className='text-[#ea553b]'> Air Max </span>97</h2>
        <p className='mt-4 max-2xl:max-w-8xl info-text max-sm:text-justify md:text-justify'>
          O Air Max 97 foi o primeiro tênis de corrida da
          Nike a apresentar um sistema de amortecimento
          Air de dupla pressão em toda sua extensão. Com
          um design inspirado em mountain bikes e seus
          componentes metálicos, o Air Max 97 apresenta
          um visual tubular reflexivo, dependendo do
          ângulo da luz.
        </p>
        <div className='mt-11 flex max-sm:justify-center max-md:justify-center max-lg:justify-center'>
          <Button label='Conferir' height="h-[40px] max-sm:h-[50px] max-sm:w-[240px] max-md:w-[300px] max-2xl:w-[300px]" backgroundColor="bg-[#ea553b]" textColor="text-white"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center xl:ml-[28%] max-sm:w-[98%]">
        <Carousel slides={slides} autoSlide={false} />
      </div>
    </section>
  )
}
export default SuperQuality