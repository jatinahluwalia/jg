import { MdArrowForwardIos } from 'react-icons/md';

const WelcomeJG_Group = () => {
  return (
    <div>
      <img src="/BgWelcomeJG_group.png" alt="" className="h-screen w-screen" />
      <div className="z-1 absolute bottom-12 px-5 text-white ">
        <h1 className="text-6xl">Welcome to The JG Group</h1>
        <div className="border-l-2 border-[#2773b0] pl-3 text-sm">
          <p>
            Founded in 1909 by brothers Jethmul and Genmul on the vibrant
            streets of Chennai, JG Group today has transformed into a global
            force.
          </p>
          <p>
            What began as paper trading now thrives with unparalleled expertise
            across diverse industries such as - Real estate, Hospitality,
            International Trade, Solar and LED Lighting.
          </p>
        </div>
      </div>
      <div className=" absolute bottom-1 flex w-full flex-col items-center justify-center text-black">
        Read more
        <MdArrowForwardIos className="rotate-90" />
      </div>
    </div>
  );
};

export default WelcomeJG_Group;
