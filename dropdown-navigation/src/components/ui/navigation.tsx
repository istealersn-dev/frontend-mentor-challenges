"use client";

import Image from "next/image";

import { MenuBar } from "./menuBar";
import { MenuBarProps } from "../types";
import useWindowSize from "@/hooks/useWindowSize";
import { use, useState } from "react";

interface MenuLayoutProps {
  hamicon: string;
  handleNav?: () => void;
}

interface NavProps extends MenuLayoutProps, MenuBarProps {
  logo: string;
}

export const Nav = ({
  logo,
  hamicon,
  menuGroup,
  otherItems,
  cta,
}: NavProps) => {
  const [isHamNav, setIsHamNav] = useState(false);
  const { innerWidth } = useWindowSize();

  const isMobile = innerWidth && innerWidth < 1279;

  const handleNav = () => {
    setIsHamNav(!isHamNav);
  };

  return (
    <header className={`${isHamNav ? 'xs:relative' : ''} grid grid-cols-2 mx-4 mt-4 lg:mt-6 items-center xl:grid-cols-12 lg:mx-10 lg:h-[2.625rem] lg:gap-10`}>
      <div className="xl:col-span-1 justify-self-start">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className="m-auto lg:items-self-center"
        />
      </div>
      <nav className={`justify-self-end xl:justify-self-start xl:col-span-11`}>
        <MenuLayout hamicon={hamicon} handleNav={handleNav} />
        <MenuBar
          menuGroup={menuGroup}
          otherItems={otherItems}
          cta={cta}
          hamNav={isHamNav}
          handleNav={handleNav}
        />
      </nav>
    </header>
  );
};

const MenuLayout = ({ hamicon, handleNav }: MenuLayoutProps) => {
  return (
    <Image
      src={hamicon}
      alt="Open Menu"
      className="xl:hidden cursor-pointer"
      onClick={handleNav}
    />
  );
};
