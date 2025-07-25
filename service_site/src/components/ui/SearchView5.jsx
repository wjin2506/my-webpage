import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchView5 = ({ 
  placeholder = "Search...", 
  value = "", 
  onChange, 
  onSubmit,
  className = "",
  disabled = false,
  ...props 
}) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(searchValue);
    }
  };

  const baseClasses = "w-full px-3 py-2 text-sm sm:text-base border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const disabledClasses = disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white hover:border-gray-400";
  
  const inputClasses = `${baseClasses} ${disabledClasses} ${className}`.trim().replace(/\s+/g, ' ');

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
    </form>
  );
};

SearchView5.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SearchView5; 