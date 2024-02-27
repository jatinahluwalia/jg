import Button from '../../Button/Button';
import PropTypes from 'prop-types';

const Column = (props) => {
  const {
    ColumnButtonValue,
    columnHeadingValue,
    ButtonStatus,
    columnExternalCss,
    columnButtonExternalCss,
    columnHeadingCss,
    columnDropDownValue,
    columnDropdownSubHeadingExternalCss,
    columnDropDownHeading,
    columnDropDownStatus,
    columnDropDownHeadingCss,
    columnButtonMethod,
  } = props;
  return (
    <div
      className={`flex flex-col justify-between ${columnExternalCss} relative`}
    >
      <div className="flex w-full items-center justify-between">
        <h1 className={`${columnHeadingCss}`}>{columnHeadingValue}</h1>
        {ButtonStatus && (
          <Button
            buttonValue={ColumnButtonValue}
            buttonExternalCss={columnButtonExternalCss}
            buttonMethod={columnButtonMethod}
          />
        )}
      </div>
      {columnDropDownStatus && (
        <div className="pl-2">
          <h1 className={`${columnDropDownHeadingCss}`}>
            {columnDropDownHeading}
          </h1>
          {columnDropDownValue?.map((val, index) => {
            return (
              <p
                key={index}
                className={`${columnDropdownSubHeadingExternalCss}`}
              >
                {val}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

Column.propTypes = {
  ColumnButtonValue: PropTypes.string,
  columnHeadingValue: PropTypes.string,
  ButtonStatus: PropTypes.bool,
  columnExternalCss: PropTypes.string,
  columnButtonExternalCss: PropTypes.string,
  columnHeadingCss: PropTypes.string,
  columnDropDownValue: PropTypes.array,
  columnDropdownSubHeadingExternalCss: PropTypes.string,
  columnDropDownHeading: PropTypes.string,
  columnDropDownStatus: PropTypes.bool,
  columnDropDownHeadingCss: PropTypes.string,
  columnButtonMethod: PropTypes.func,
};
export default Column;
