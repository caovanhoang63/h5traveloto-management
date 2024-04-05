import React, { useState } from 'react';
import './combobox.css';

const ComboBox = ({id,label,defaultValue,placeholderText,options,onChange}) => {
  // set giá trị mặc định ban đàu
  const [selectedOption, setSelectedOption] = useState(defaultValue || ''); 

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="combobox-container">
      <label className="combobox-label" htmlFor="combobox-select">
        {label || 'Lựa chọn'}
      </label>
      <select
        id={id}
        value={selectedOption}
        onChange={handleChange}
        className="combobox-select"
      >
      <option value="" hidden>
      {/* set PlaceHolder */}
          {placeholderText || 'Chọn một tùy chọn'} 
        </option>
        {/* options mảng các giá trị */}
        {options?.map((option, index) => (
          <option key={index} >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;