import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt="custumer"
                className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <h3 className="mt-4 text-3xl z-1 font-palanquin text-center font-bold">{customerName}</h3>
            <p className="mt-6 max-w-lg text-center info-text ">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    width={24}
                    height={24}
                    className="object-contain m-0"
                />
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
        </div>
    )
}

export default ReviewCard
