import { useState } from 'react';
import Navbar from '../Header/NavBar/Navbar';
import SideBar from '../SideBar/SideBar';
import propTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

const NavSideLayout = (props) => {
  const { children } = props;
  const [hamburgerValue, setHamburgerValue] = useState(false);
  const hamburgerValueMethod = () => {
    setHamburgerValue(!hamburgerValue);
  };
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-20">
        <Navbar hamburgerMethod={hamburgerValueMethod} />
        <AnimatePresence mode="wait">
          {hamburgerValue && (
            <SideBar sideBarButtonMethod={hamburgerValueMethod} />
          )}
        </AnimatePresence>
      </div>
      <div>{children}</div>
    </div>
  );
};

NavSideLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default NavSideLayout;
