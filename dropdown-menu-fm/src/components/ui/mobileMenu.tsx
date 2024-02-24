import arrowUp from '/src/assets/icon-arrow-up.svg';
import arrowDown from '/src/assets/icon-arrow-down.svg';
import menuClose from '/src/assets/icon-close-menu.svg';
import { useState } from 'react';

interface SVGRenderProps {
  name: string;
  width: string;
  height: string;
  pathd: string;
  pathfill: string;
}

interface MenuGroupProps {
  name: string;
  menuItems: SVGRenderProps[];
}

interface MenuDropdownProps {
  menuGroup: MenuGroupProps[];
  otherItems: string[];
  cta: string[];
  handleNav: () => void;
}

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

export function MenuDropdown({
  menuGroup,
  otherItems,
  cta,
  handleNav,
}: MenuDropdownProps) {
  const [groupToggles, setGroupToggles] = useState(
    Array(menuGroup.length).fill(false)
  );

  const handleMenu = (groupIndex: number) => {
    setGroupToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[groupIndex] = !newToggles[groupIndex];
      return newToggles;
    });
  };

  return (
    <div className="grid grid-rows-auto gap-8 pr-5 pt-4 xl:grid-cols-2 bg-almostWhitexl:grid-rows-none xl:p-0">
      <div className="w-6 h-6 place-self-start justify-self-end cursor-pointer xl:hidden">
        <img src={menuClose} alt="Hamburger menu icon" onClick={handleNav} />
      </div>
      <ul className="grid gap-4 pl-6 text-p-sm text-mediumGray xl:grid-cols-5 xl:grid-rows-none 2xl:gap-0 xl:items-center xl:text-cta-sm xl:p-0">
        {/* Render the menuItems for each Group  */}
        {menuGroup.map((group, groupIndex) => (
          <li
            key={groupIndex}
            className="group relative"
            onClick={() => handleMenu(groupIndex)}
          >
            <a href="#" className="xl:inline hover:text-almostBlack">
              {group.name}
              <img
                src={groupToggles[groupIndex] ? arrowUp : arrowDown}
                alt={groupToggles[groupIndex] ? 'Arrow Up' : 'Arrow Down'}
                className="inline ml-4 xl:ml-2"
              />
            </a>
            <ul
              className={`grid gap-4 mt-6 pl-6 ${
                groupToggles[groupIndex] ? '' : 'hidden'
              } xl:absolute xl:group-hover:block xl:bg-almostWhite xl:shadow-mxl xl:p-6 xl:mt-0 xl:rounded-sm xl:right-0 xl:top-5 xl:pl-6 xl:pt-6 xl:pr-10 xl:gap-0`}
            >
              {group.menuItems.map((item, itemIndex) => (
                <li key={itemIndex} className="xl:w-28 xl:pb-4 last:pb-0">
                  {typeof item === 'object' && <SVGRender {...item} />}
                  <a href="#" className="ml-4 xl:text-cta-sm">
                    {typeof item === 'object' ? item.name : item}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
        {/* Rendering the remaining menu Items */}
        {otherItems.map((item, index) => (
          <li key={index} className="hover:text-almostBlack">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <div className="xl:place-self-end text-mediumGray text-cta-sm text-center grid gap-4 xl:block">
        {cta.map((item, index) => (
          <a
            href="#"
            key={index}
            role="button"
            className="block even:py-3 even:px-6 rounded-def even:border-2 even:border-mediumGray ml-6 xl:inline-block xl:ml-0 xl:even:ml-10 even:hover:border-almostBlack hover:text-almostBlack"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
