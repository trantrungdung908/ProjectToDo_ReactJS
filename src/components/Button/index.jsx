import React from "react";

const Button = ({ children, className = "", ...restProps }) => {
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
