import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "../assets/icons";

export default function Carousel({
    slides,
    autoSlide = false,
    autoSlideInterval = 5000,
}) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="relative overflow-hidden w-[500px] shadow-2xl rounded-2xl" >
            <div
                className="flex transition-transform ease-out duration-500 relative"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <img
                        key={i}
                        src={slide}
                        alt={`slide-${i}`}
                        className="w-full h-auto"
                    />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-5 py-40 z-10 shadow-xl">
                <button
                    onClick={prev}
                    className="p-1 rounded-full bg-[#ea553b] shadow max-sm:mb-20" 
                >
                    <img src={ChevronLeft} alt="prev" className="max-sm:h-10"/>
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full color-black bg-[#ea553b] shadow max-sm:mb-20"
                >
                    <img src={ChevronRight} alt="prox" className="max-sm:h-10"/>
                </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 mb-10">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`
                            transition-all w-3 h-3 bg-[#ea553b] rounded-full
                            ${curr === i ? "p-2" : "bg-gray-300"}
                        `}
                    />
                ))}
            </div>
        </div>
    )
}