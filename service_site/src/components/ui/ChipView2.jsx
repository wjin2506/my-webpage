import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChipView = ({ 
  items = [], 
  selectedIndex = 0, 
  onSelectionChange,
  className = '',
  ...props 
}) => {
  const [selected, setSelected] = useState(selectedIndex);

  const handleChipClick = (index) => {
    setSelected(index);
    if (onSelectionChange) {
      onSelectionChange(index);
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 ${className}`} {...props}>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => handleChipClick(index)}
          className={`
            px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm font-medium transition-all duration-200
            ${selected === index 
              ? 'bg-global-1 text-global-7' :'bg-transparent text-global-1 hover:bg-global-3'
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

ChipView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  selectedIndex: PropTypes.number,
  onSelectionChange: PropTypes.func,
  className: PropTypes.string,
};

export default ChipView;