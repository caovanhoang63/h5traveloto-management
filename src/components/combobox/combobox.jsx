import React, { useState } from 'react';
import './combobox.css';

const ComboBox = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue || '');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  return (
    <div className="combobox-container">
      <label className="combobox-label" htmlFor="combobox-select">
        {props.label || 'Lựa chọn'}
      </label>
      <select
        id="combobox-select"
        value={selectedOption}
        onChange={handleChange}
        className="combobox-select"
      >
      <option value="" hidden>
          {props.placeholderText || 'Chọn một tùy chọn'}
        </option>
        {props.options.map((option, index) => (
          <option key={index} >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;