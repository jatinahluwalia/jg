import propTypes from 'prop-types';

const Button = (props) => {
  const { buttonValue, buttonMethod, buttonExternalCss } = props;
  return (
    <div
      onClick={() => (buttonMethod ? buttonMethod() : false)}
      className={`${buttonExternalCss}`}
    >
      {buttonValue}
    </div>
  );
};

Button.propTypes = {
  buttonValue: propTypes.string,
  buttonMethod: propTypes.func,
  buttonExternalCss: propTypes.string,
};

export default Button;

Button.propTypes = {
  buttonValue: propTypes.string,
  buttonMethod: propTypes.func,
  buttonExternalCss: propTypes.string,
};
