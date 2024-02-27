import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { hamburgerMethod } = props;
  return (
    <div className="flex h-[100px] items-center justify-between bg-transparent px-2 py-2">
      <Link>
        <img
          src="/Logo.svg"
          alt="image"
          width={'70px'}
          className="filter-black"
        />
      </Link>
      <RxHamburgerMenu
        size={45}
        fill="true"
        onClick={() => hamburgerMethod()}
      />
    </div>
  );
};

Navbar.propTypes = {
  hamburgerMethod: PropTypes.func.isRequired,
};

export default Navbar;
