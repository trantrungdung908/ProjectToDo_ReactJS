import React, { useState, useRef } from "react";
import Button from "../Button";

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
    <form className={`form ${className}`} onSubmit={_onSubmit}>
      <input
        onChange={getValue}
        value={input}
        placeholder="Add your task"
        type="text"
        className="input-text"
        id="inputTask"
        autoFocus
      />
      <Button className="btnAction">{btnText}</Button>
    </form>
  );
};

export default Form;
