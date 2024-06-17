import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { products } from '../constants/index';
import PopularProductCard from '../components/PopularProductCard';
import PopularProductCardMobile from '../components/PopularProductCardMobile';

const PopularProducts = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Considera resoluções até 767px como mobile

  return (
    <section id="products" className="max-container max-sm:mt-12 mt-24 padding-y">
      <div className={`flex flex-col justify-start gap-5 ${isMobile ? 'padding-no-x-mobile max-sm:text-justify' : 'max-2xl:padding-x'}`}>
        <h2 className="text-4xl font-palanquin font-bold text-center sm:text-center md:text-left">
          Lançamentos
          <span className="text-coral-red"> Disponíveis</span>
        </h2>
        <p className={`lg:max-w-[50%] mt-2 font-montserrat text-slate-gray info-text ${isMobile ? 'sm:text-justify' : 'lg:text-left'}`}>
          Explore a fusão ideal de desempenho, estilo e conforto com a linha de tênis premium Nike. Encontre o equilíbrio perfeito entre tecnologia avançada e design inovador, proporcionando uma experiência única a cada passo.
        </p>
      </div>

      {isMobile ? (
        <div className="mt-8 flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {/* Espaço no início do carrossel */}
          <div className="flex-shrink-0" style={{ width: '2%' }}></div>
          {products.map((product) => (
            <PopularProductCardMobile key={product.name} {...product} />
          ))}
          {/* Espaço ao final do carrossel */}
          <div className="flex-shrink-0" style={{ width: '2%' }}></div>
        </div>
      ) : (
        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 gap-4 md:max-2xl:padding-x">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularProducts;
