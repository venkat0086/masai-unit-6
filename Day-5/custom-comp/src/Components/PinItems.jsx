import { forwardRef } from "react";
import propTypes from "prop-types";

const style = {
  padding: 10,
  width: 15,
  fontSize: 14,
  margin: 5,
};

const PinItem = forwardRef(({ onChange, onBackspace, max }, ref) => {
  const handleKeyUp = (e) => {
    switch (e.keyCode) {
      case 8: {
        if (!e.target.value) onBackspace(e.target.value);
        break;
      }
      case 9: {
        e.preventDefault();
        break;
      }
      default:
        onChange(e.target.value);
      //e.preventDefault();
    }
    onChange(e.target.value);
  };

  return (
    <input onKeyUp={handleKeyUp} ref={ref} maxLength={max} style={style} />
  );
});

PinItem.propTypes = {
  max: propTypes.number,
  onBackspace: propTypes.func,
  onChange: propTypes.func,
};

PinItem.defaultProps = {
  max: 1,
};

export { PinItem };
