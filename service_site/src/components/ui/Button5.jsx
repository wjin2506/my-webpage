import React from 'react';
import PropTypes from 'prop-types';
import '../Home5.css';

const Button5 = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  rightImage = null,
  className = "",
  ...props 
}) => {
  const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 focus:ring-gray-500',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
    medium: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base',
    large: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
      {rightImage && (
        <img 
          src={rightImage.src} 
          alt="" 
          className={`w-[${rightImage.width}px] h-[${rightImage.height}px]`}
        />
      )}
    </button>
  );
};

Button5.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  rightImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  className: PropTypes.string,
};

export default Button5; 