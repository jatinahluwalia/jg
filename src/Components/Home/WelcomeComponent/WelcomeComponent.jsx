import Button from '../../Button/Button';

const WelcomeComponent = () => {
  return (
    <div className="relative">
      <video
        src="../welcomeVideo.mp4"
        className="w-screen"
        autoPlay
        muted
        loop
      ></video>
      <div className="z-1 absolute bottom-12 px-5 text-white">
        <h1 className="font-ramillas text-7xl">From Roots To Reach</h1>
        <p className="pl-1 text-base underline underline-offset-8">
          Welcome to the century old legacy of the JG Group
        </p>
        <Button
          buttonValue={`Group Profile`}
          buttonExternalCss={`uppercase w-[11rem] orangeBG_Color px-2 py-4 text-center mt-7 text-lg`}
          buttonMethod={() => {}}
        />
      </div>
    </div>
  );
};

export default WelcomeComponent;
