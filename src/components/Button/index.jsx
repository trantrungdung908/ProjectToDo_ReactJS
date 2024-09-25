import React from "react";

const Button = ({ children, className = "", ...restProps }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
