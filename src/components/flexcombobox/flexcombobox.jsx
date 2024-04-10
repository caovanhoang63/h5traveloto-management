import React, { useState } from 'react';
import './flexcombobox.css';

const FlexCombobox = ({id,label,defaultValue,placeholderText,options,onChange}) => {
  // set giá trị mặc định ban đầu
  const [selectedOption, setSelectedOption] = useState(defaultValue || '');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flexcombobox-container">
      <label className={"flexcombobox-label" + (label ? '' : " unactive")} htmlFor="flexcombobox-select">
        {label}
      </label>
      <select
        id={id}
        value={selectedOption}
        onChange={handleChange}
        className="flexcombobox-select"
      >
        <option value="" hidden>
        {/* set PlaceHolder */}
            {placeholderText || 'Chọn một tùy chọn'}
        </option>
        {/* options mảng các giá trị */}
        {options.map((option, index) => (
        <option key={index} >
              {option.value}
        </option>
          ))}
      </select>
    </div>
  );
};

export default FlexCombobox;