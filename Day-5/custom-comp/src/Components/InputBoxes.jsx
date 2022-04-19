import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { PinItem } from "./PinItems";
function InputBoxes({ length, label, perBox, onChange }) {
  const [values, setValues] = useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(0));

  const handleChange = (value, index) => {
    const val = [...values];
    val[index] = value;
    setValues(val);
    if (value.length > 0 && value.length === perBox && index < length - 1) {
      elements.current[index + 1].focus();
    }
    onChange(val.join(" "));
  };

  const handleBackSpace = (value, index) => {
    if (index > 0) {
      elements.current[index - 1].focus();
    }
    const val = [...values];
    val[index] = value;
    setValues(val);
    onChange(val.join(" "));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    console.log(e.clipboardData.getData("Text"));
  };
  return (
    <div onPaste={handlePaste}>
      <h1>{label}</h1>
      {values.map((item, index) => (
        <PinItem
          key={index}
          ref={(n) => (elements.current[index] = n)}
          onChange={(v) => handleChange(v, index)}
          onBackspace={(v) => handleBackSpace(v, index)}
          max={perBox}
        />
      ))}
    </div>
  );
}
InputBoxes.propTypes = {
  length: propTypes.number.isRequired,
  perBox: propTypes.number,
  label: propTypes.string,
  onChange: propTypes.func,
};

InputBoxes.defaultProps = {
  label: "Enter Text",
  perBox: 1,
};

export default InputBoxes;
