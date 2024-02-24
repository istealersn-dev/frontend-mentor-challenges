import clientAudiophile from '/src/assets/client-audiophile.svg';
import clientDatabiz from '/src/assets/client-databiz.svg';
import clientMaker from '/src/assets/client-maker.svg';
import clientMeet from '/src/assets/client-meet.svg';

const clientLogos = [clientDatabiz, clientAudiophile, clientMeet, clientMaker];

export function Trustbar() {
  return (
    <div className="grid grid-cols-4 gap-7 md:gap-8 items-center mt-12 xl:mt-12">
      {clientLogos.map((item, index) => (
        <img src={item} alt="Client logo" key={index} />
      ))}
    </div>
  );
}
