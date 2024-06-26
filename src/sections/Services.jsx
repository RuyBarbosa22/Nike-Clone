import { useEffect } from 'react';
import { services } from '../constants/index';
import ServiceCard from '../components/ServiceCard';
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    AOS.init({ duration: 2000, disable: 'mobile' });
  }, []);

  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard
          key={service.label}
          dataAos={
            index === 0 ? "fade-up-right" :
              index === 1 ? "fade-up" :
                index === 2 ? "fade-up-left" : ""
          }
          {...service}
        />
      ))}
    </section>
  )
}

export default Services;
