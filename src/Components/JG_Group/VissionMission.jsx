import BoxLayoutDesign from '../Layouts/BoxLayoutDesign';

const VissionMission = () => {
  const Boxes = [
    {
      heading1: 'VISION',
      heading2: 'Tradion empowers exploration: crafting a global future.',
      paragraph:
        'JG endeavors to be a global powerhouse, recognized not only for its enduring history but for its limitless potential. Driving significant economic change, we aspire to shape industries with agility, trusted partnerships and the courage to explore new markets and sectors.',
      boxCss: '',
    },
    {
      heading1: 'VISION',
      heading2: 'Tradion empowers exploration: crafting a global future.',
      paragraph:
        'JG endeavors to be a global powerhouse, recognized not only for its enduring history but for its limitless potential. Driving significant economic change, we aspire to shape industries with agility, trusted partnerships and the courage to explore new markets and sectors.',
      boxCss: 'flex-row-reverse text-right',
    },
  ];
  return (
    <div className="flex h-screen flex-col justify-end">
      {Boxes.map((val, i) => (
        <div className={`flex gap-2 ${val.boxCss} mb-11`} key={i}>
          <BoxLayoutDesign />
          <div>
            <h1 className="text-6xl">
              {val.heading1}
              <span className="BlueText_Color">.</span>
            </h1>
            <h3 className="BlueText_Color text-lg">{val.heading2} </h3>
            <p>{val.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VissionMission;
