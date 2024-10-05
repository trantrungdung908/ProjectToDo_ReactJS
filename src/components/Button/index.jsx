import React from "react";
import styled from "styled-components";

const Button = ({ children, className = "", ...restProps }) => {
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
`;

export const StyledEditButton = styled(StyledButton)`
  background-color: #baa800;
`;

export const StyledDeleteButton = styled(StyledButton)`
  background-color: #dc3545;
`;

export const StyledDoneButton = styled(StyledButton)`
  background-color: ${(props) => (props.$isDone ? "#baa800" : "#28a745")};
`;

export default Button;
