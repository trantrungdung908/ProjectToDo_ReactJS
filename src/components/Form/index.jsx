import React, { useState, useRef } from "react";
import Button from "../Button";
import styled from "styled-components";

const Form = ({ className = "", btnText = "Submit", ...restProps }) => {
  const { handleSubmit, defaultValue } = restProps;

  const [input, setInput] = useState(defaultValue || "");

  const onSuccess = () => {
    setInput("");
  };

  const _onSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    handleSubmit(input, onSuccess);
  };

  const getValue = (e) => {
    setInput(e.target.value);
  };
  return (
    <StyledForm className="form" onSubmit={_onSubmit}>
      <StyledInput
        onChange={getValue}
        value={input}
        placeholder="Add your task"
        type="text"
        id="inputTask"
        autoFocus
      />
      <Button className="btnAction">{btnText}</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 100%;
  overflow: hidden;
  border-radius: 50px;
`;

const StyledInput = styled.input`
  flex: 1;
  background-color: #000000;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export default Form;
