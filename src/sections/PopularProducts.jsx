import { products } from '../constants/index'
import  PopularProductCard  from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Lançamentos 
         <span className='text-coral-red'> Air Max</span></h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray text-justify'>Os tênis Nike Air Max são famosos por sua tecnologia de amortecimento de ar visível desde 1987,
           oferecendo conforto e estilo em uma variedade de modelos.</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-16'>
        {products.map ((product) => (
          <PopularProductCard key=
          {product.name} {...product} />
        ))}

      </div>
    </section>
  )
}

export default PopularProducts
