import { useMediaQuery } from 'react-responsive';
import { Trustbar } from './trustbar.tsx';

import heroImageMobile from '/src/assets/image-hero-mobile.png';
import heroImageDesktop from '/src/assets/image-hero-desktop.png';

export function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 975 });

  const getImageSrc = () => {
    return isMobile ? heroImageMobile : heroImageDesktop;
  };

  return (
    <section>
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 2xl:pl-40 2xl:pr-32">
        <div className="justify-self-center xl:order-2 lg:w-[480px] xl:justify-self-end">
          <img
            src={getImageSrc()}
            alt="Hero image - man holding his laptop while standing"
          />
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
