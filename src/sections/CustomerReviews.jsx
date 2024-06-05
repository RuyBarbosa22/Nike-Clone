import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palaquin text-center text-4xl font-bold">
        O que nossos 
        <span className="text-[#ea553b]"> clientes </span>
        dizem?
      </h3>
      <p className="info-text m-auto mt-4 max-w-3xl text-center">Confira as opiniões de quem já experimentou nossos produtos. Suas avaliações nos ajudam a melhorar continuamente e garantir a melhor qualidade para você.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
