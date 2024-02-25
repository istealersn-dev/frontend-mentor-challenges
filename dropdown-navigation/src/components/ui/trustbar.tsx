import clientAudiophile from '/src/assets/client-audiophile.svg';
import clientDatabiz from '/src/assets/client-databiz.svg';
import clientMaker from '/src/assets/client-maker.svg';
import clientMeet from '/src/assets/client-meet.svg';

import Image from 'next/image';

const clientLogos = [clientDatabiz, clientAudiophile, clientMeet, clientMaker];

export function Trustbar() {
  return (
    <div className="grid grid-cols-4 gap-7 md:gap-8 items-center mt-12 xl:mt-12">
      {clientLogos.map((item, index) => (
        <Image 
        key={index}
        src={item}
        alt='Client logo'
        priority
        />
      ))}
    </div>
  );
}
