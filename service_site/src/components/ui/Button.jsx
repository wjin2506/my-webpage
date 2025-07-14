import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  onClick, 
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-medium border rounded-sm transition-colors cursor-pointer inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-global-1 text-global-5 border-global-1 hover:bg-global-2',
    outline: 'bg-transparent text-global-1 border-global-1 hover:bg-global-1 hover:text-global-5',
    secondary: 'bg-global-3 text-global-5 border-global-3 hover:bg-global-2'
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-6 py-4 text-lg'
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 