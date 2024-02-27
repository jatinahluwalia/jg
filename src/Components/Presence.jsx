import LineTitle from './LineTitle';
import vid from '../assets/presence.mp4';
const Presence = () => {
  return (
    <div className="standard-p relative flex h-screen flex-col gap-5 px-11">
      <div className="absolute inset-0 z-[-99] bg-blue-950/50" />
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 z-[-100] h-screen object-cover"
      >
        <source src={vid} />
      </video>
      <LineTitle title={'Our Global Presence'} color={'white'} />
      <p className="text-lg">
        JG Group boldly ventures into diverse global markets, redefining growth
        with 8+ offices in 5 countries. A testament to out boundless exploration
      </p>
    </div>
  );
};

export default Presence;
