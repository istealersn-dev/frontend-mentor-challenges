import Image from "next/image";
import { Trustbar } from "./trustbar";

import heroImageMobile from '/src/assets/image-hero-mobile.png';
import heroImageDesktop from '/src/assets/image-hero-desktop.png';

export const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 2xl:pl-40 2xl:pr-32">
        <div className="justify-self-center xl:order-2 xl:w-[480px] xl:justify-self-end">
          <picture>
            <source srcSet={heroImageMobile.src} media="(max-width: 1279px)" />
            <source srcSet={heroImageDesktop.src} media="(min-width: 1280px)" />
            <img src={heroImageDesktop.src} alt="Hero image" />
          </picture>
        </div>
        <div className="grid justify-items-center place-content-center items-center gap-4 mx-4 md:mx-8 text-center pt-16 xl:text-left xl:justify-items-start text-mediumGray xl:gap-12">
          <h1 className="text-xl text-almostBlack font-bold xl:text-2xl">
            Make remote work
          </h1>
          <p className="text-p-sm text-mediumGray pb-2 lg:text-p-lg">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="text-p-sm text-almostWhite bg-almostBlack rounded-def text-center py-3 px-8 lg:text-p-lg lg:font-bold lg:hover:bg-almostWhite lg:hover:text-almostBlack lg:border-2 lg:border-almostBlack">
            Learn more
          </button>
          <Trustbar />
        </div>
      </div>
    </section>
  );
}


