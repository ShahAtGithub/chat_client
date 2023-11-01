import React, { useState } from 'react';

const MultiSelect = ({data, selectedOptions, setSelectedOptions}) => {
  

 

  const handleOptionToggle = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="multiselect">
      <div className="selected-options">
        {selectedOptions.map((option) => (
          <span key={option} className="selected-option">
            {data.find((o) => o.value === option).label}
          </span>
        ))}
      </div>
      <div className="options">
        {data.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleOptionToggle(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
