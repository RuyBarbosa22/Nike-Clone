import { useEffect, useState } from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Adiciona a classe ao body quando o menu é aberto
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      // Remove a classe ao body quando o menu é fechado
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-30 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
            src={headerLogo} alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="hidden lg:flex justify-center items-center gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:cursor-pointer hover:text-[#ea553b] transition-transform duration-300 ease-in-out hover:-translate-y-1">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden" onClick={toggleMenu}>
          <div className="relative z-40 flex flex-col justify-between w-6 h-5 cursor-pointer">
            {/* Top bar */}
            <span 
              className={`block h-0.5 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform rotate-45 translate-y-2.5 bg-[#ea553b]' : 'bg-black'}`}
            ></span>
            {/* Middle bar */}
            <span 
              className={`block h-0.5 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'bg-black'}`}
            ></span>
            {/* Bottom bar */}
            <span 
              className={`block h-0.5 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform -rotate-45 -translate-y-2.5 bg-[#ea553b]' : 'bg-black'}`}
            ></span>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-20">
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {navLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="font-montserrat text-2xl text-slate-gray hover:text-[#ea553b] transition-transform duration-300 ease-in-out">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
