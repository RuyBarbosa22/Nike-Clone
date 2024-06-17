import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from "./sections";
import Nav from "./components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

const App =() => {

 useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      AOS.init({ duration: 1000 });
    }
  }, []);

  return (
    <main className="relative overflow-x-hidden">
        <Nav /> 
      <section className="xl:padding-l wide:padding-r sm:padding-b">
        <Hero />
      </section>
      <section>
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding overflow-x-hidden">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
    )
}

export default App;
