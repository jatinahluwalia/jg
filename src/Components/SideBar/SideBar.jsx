import { useState } from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import Column from './Column/Column';
import { motion } from 'framer-motion';
import { animateVariants } from '../../utils/animations';
import propTypes from 'prop-types';

const SideBarMap = [
  {
    Heading: 'About Us',
    Button: true,
    DropDown: {
      Heading: 'JG Group',
      SubHeadings: ['Overview', 'Leadership'],
    },
  },
  {
    Heading: 'Our Businesses',
    Button: true,
    DropDown: {
      Heading: 'Business Verticals',
      SubHeadings: [
        'International Trade',
        'Hospitality',
        'Real estate',
        'Solar',
      ],
    },
  },
  {
    Heading: 'Social Initiatives',
    Button: false,
  },
  {
    Heading: 'Invest',
    Button: false,
  },
  {
    Heading: 'Group Profile',
    Button: false,
  },
  {
    Heading: 'Careers',
    Button: false,
  },
  {
    Heading: 'Contact Us',
    Button: false,
  },
];

const SideBar = (props) => {
  const { sideBarButtonMethod } = props;
  const [popStatus, setPopStatus] = useState({
    'About Us': false,
    'Our Businesses': false,
  });

  const popMethod = (value) => {
    setPopStatus({ ...popStatus, [value]: !popStatus[value] });
  };
  return (
    <>
      <motion.div
        className="absolute right-0 top-0 z-20 h-screen w-9/12 overflow-hidden bg-[#1f3759] uppercase"
        variants={animateVariants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <Column
          ColumnButtonValue={<RxCross1 />}
          ButtonStatus="true"
          columnExternalCss="p-4 text-white border-b-2 border-[#7c8a9e]"
          columnButtonExternalCss="font-bold text-[1.5rem] "
          columnHeadingCss="text-[1.5rem] uppercase"
          columnHeadingValue={'Menu'}
          columnButtonMethod={sideBarButtonMethod}
        />
        {SideBarMap.map((Val, index) => {
          return (
            <Column
              ColumnButtonValue={<IoIosArrowDropright />}
              ButtonStatus={Val.Button}
              columnExternalCss="px-5 py-6 text-white"
              columnButtonExternalCss={`font-bold text-[1.5rem] ${popStatus[Val.Heading] ? 'rotate-90 text-[#e68f5c]' : ''}`}
              columnHeadingCss={`text-[1.5rem] ${popStatus[Val.Heading] ? 'text-[#e68f5c]' : ''} uppercase`}
              columnDropDownValue={Val?.DropDown?.SubHeadings}
              columnDropdownSubHeadingExternalCss="text-[1.5rem]"
              columnDropDownHeading={Val?.DropDown?.Heading}
              key={index}
              columnHeadingValue={Val.Heading}
              columnDropDownStatus={popStatus[Val.Heading]}
              columnButtonMethod={() => popMethod(Val.Heading)}
              columnDropDownHeadingCss="font-bold text-[1.7rem]"
            />
          );
        })}
      </motion.div>
    </>
  );
};
export default SideBar;

SideBar.propTypes = {
  sideBarButtonMethod: propTypes.func,
};
