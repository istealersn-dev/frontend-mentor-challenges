import Image from "next/image";
import { MenuBarProps, SVGRenderProps } from "../types";

import menuClose from "@/assets/icon-close-menu.svg";
import arrowUp from "/src/assets/icon-arrow-up.svg";
import arrowDown from "/src/assets/icon-arrow-down.svg";
import { useState } from "react";

export const MenuBar = ({
  menuGroup,
  otherItems,
  cta,
  hamNav,
  handleNav
}: MenuBarProps) => {

  const [groupToggles, setGroupToggles] = useState(
    Array(menuGroup.length).fill(false)
  );
  const mobileLayout = "xs:absolute xs:-top-4 xs:-right-4 xs:bg-almostWhite xs:h-screen xs:w-60 xs:px-6";

  const handleMenu = (groupIndex: number) => {
    setGroupToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[groupIndex] = !newToggles[groupIndex];
      return newToggles;
    });
  };

  return (
    <>
      {hamNav && (
        <div>
        <div className="xs:absolute xs:-top-4 xs:-left-4 xs:w-screen xs:opacity-75 xs:h-screen bg-almostBlack"></div>
        <div>
          <Image
            src={menuClose}
            alt="Open Menu"
            className="xl:hidden cursor-pointer xs:absolute xs:z-50 xs:-top-4 xs:-right-4 pt-6 mr-5 transition-all duration-300"
            onClick={handleNav}
          />
        </div>
        </div>
      )}
      <ul
        className={`${hamNav ? mobileLayout : ''} ${hamNav ? 'xs:block' : 'xs:hidden'} text-mediumGray xl:grid xl:grid-cols-10 lg:hover:text-almostBlack lg:items-center`}
      >
        <div className="xs:mt-20 lg:col-span-8 lg:mt-0">
          {menuGroup.map((group, groupIndex) => (
            <li
              key={groupIndex}
              className={` ${
                hamNav ? "block" : "inline-block"
              } xs:pb-4 lg:pr-10`}
              onClick={() => handleMenu(groupIndex)}
            >
              <a href="#">
                {group.name}
                <Image
                  src={groupToggles[groupIndex] ? arrowUp : arrowDown}
                  alt={groupToggles[groupIndex] ? 'Arrow Up' : 'Arrow Down'}
                  className="ml-2 inline"
                />
              </a>
              <ul className={`
                ${groupToggles[groupIndex] ? '' : 'hidden'} lg:absolute lg:shadow-mxl lg:rounded-def lg:bg-almostWhite xs:pt-6 xs:px-6 xs:text-p-sm`}>
                {group.menuItems.map((val, index) => (
                  <li key={index} className="xs:pb-4">
                    {typeof val === 'object' && <SVGRender {...val} />}
                    <a href="#" className="xs:pl-4">{typeof val === 'object' ? val.name : val}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          {otherItems.map((item, index) => (
            <li
              key={index}
              className={`${
                hamNav ? "block" : "inline-block"
              } xs:pb-4 lg:pr-10`}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </div>
        <div className="lg:col-span-1">
          {cta.map((item, index) => (
            <li
              key={index}
              className={`${
                hamNav ? "block" : "inline-block"
              } text-mediumGray text-center lg:hover:text-almostBlack odd:py-4 even:px-6 even:py-3 lg:inline lg:pr-10 even:border-2 even:border-mediumGray even:rounded-def lg:even:hover:text-almostBlack lg:even:hover:border-almostBlack`}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

/**
 * Renders an SVG element with the provided width, height, path data, and path fill.
 *
 * @param width - The width of the SVG element.
 * @param height - The height of the SVG element.
 * @param pathd - The path data for the SVG path element.
 * @param pathfill - The fill color for the SVG path element.
 */
const SVGRender = ({ width, height, pathd, pathfill }: SVGRenderProps) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    className="inline"
  >
    <path d={pathd} fill={pathfill} />
  </svg>
);
