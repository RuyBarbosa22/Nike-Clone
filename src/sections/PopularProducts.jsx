import { products } from '../constants/index'
import  PopularProductCard  from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12 mt-24'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold max-sm:text-center'>Lançamentos 
         <span className='text-coral-red'> Disponíveis</span></h2>
        <p className='lg:max-w-[50%] mt-2 font-montserrat text-slate-gray text-justify max-sm:text-center'>Explore a fusão ideal de desempenho, estilo e conforto com a linha de tênis premium Nike. Encontre o equilíbrio perfeito entre tecnologia avançada e design inovador, proporcionando uma experiência única a cada passo.
        </p>
      </div>

      <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-16'>
        {products.map ((product) => (
          <PopularProductCard key=
          {product.name} {...product} />
        ))}

      </div>
    </section>
  )
}

export default PopularProducts
