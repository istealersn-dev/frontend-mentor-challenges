"use client";

import Image from "next/image";

import { MenuBar } from "./menuBar";
import { MenuBarProps } from "../types";
import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";

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

  const isMobile = innerWidth !== undefined;

  const handleNav = () => {
    setIsHamNav(!isHamNav);
  };

  return (
    <header
      className={`${
        isHamNav ? "xs:relative " : ""
      }grid grid-cols-2 mx-4 mt-4 lg:mt-6 lg:mx-10 lg:h-[2.625rem] lg:gap-10 xl:grid-cols-12`}
    >
      <div className="col-span-1 xs:justify-self-start w-[5.437rem] h-[2.1875rem]">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <nav className="xs:justify-self-end xl:col-span-11">
        {isMobile && <MenuLayout hamicon={hamicon} handleNav={handleNav} />}
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
      className="xl:hidden xl:aria-disabled:sr-only cursor-pointer"
      onClick={handleNav}
    />
  );
};
