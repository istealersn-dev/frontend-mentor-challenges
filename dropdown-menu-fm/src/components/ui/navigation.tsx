import { MenuDropdown } from './mobileMenu.tsx';
import { fetchData } from '../lib/utils.ts';

import snap from '/src/assets/logo.svg';
import menuOpen from '/src/assets/icon-menu.svg';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface MenuLayoutProps {
  handleNav: () => void;
}

const data = await fetchData();
const jsonData = data.menuDropdown;

const Nav = () => {
  const [hamNav, setHamNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1279 });

  const handleNav = () => {
    setHamNav(!hamNav);
  };

  return (
    <header className="grid grid-cols-2 px-4 md:px-10 pt-4 xl:pt-6 xl:grid-cols-8 xl:h-auto xl:items-center relative">
      <div className="col-start-1 h-[35px] w-[87px] object-cover">
        <img src={snap} alt="Snap logo" className="cursor-pointer h-full w-full" />
      </div>
      <nav className="col-start-2 justify-self-end xl:w-full xl:col-span-7 xl:h-[42px]">
        {!hamNav && isMobile && (
          <img
            src={menuOpen}
            alt="Hamburger menu icon"
            className={`xl:hidden cursor-pointer`}
            onClick={handleNav}
          />
        )}
        <div
          className={`absolute ${
            hamNav ? 'block' : 'hidden'
          } top-0 right-0 w-60 h-screen bg-almostWhite xl:relative xl:h-auto xl:w-full xl:pt-0 xl:block`}
        >
          <MenuLayout handleNav={handleNav} />
        </div>
      </nav>
    </header>
  );
};

function MenuLayout({ handleNav }: MenuLayoutProps) {
  return (
    <MenuDropdown
      menuGroup={jsonData.menuGroup}
      otherItems={jsonData.otherItems}
      cta={jsonData.cta}
      handleNav={handleNav}
    />
  );
}

export default Nav;
