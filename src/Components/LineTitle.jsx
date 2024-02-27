import propTypes from 'prop-types';
const LineTitle = ({ title, color }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className={`mt-8 h-[2px]`} style={{ backgroundColor: color }} />

      <h1 className="font-ramillas text-7xl" style={{ color }}>
        {title}
      </h1>
    </div>
  );
};

export default LineTitle;

LineTitle.propTypes = {
  title: propTypes.string,
  color: propTypes.string,
};
