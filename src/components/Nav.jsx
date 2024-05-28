import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header data-aos="fade-down" className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between itens-center max-container'>
        <a href="/">
          <img 
          src={headerLogo} alt='Logo'
          width={130}
          height={29}/>
        </a>
        <ul className='flex justify-center itens-center gap-16 max-lg:hidde'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray hover:cursor-pointer hover:text-[#ea553b] transition-transform duration-300 ease-in-out hover:text-lg hover:-translate-y-1'>
                  {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger"
          width={25}
          height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
