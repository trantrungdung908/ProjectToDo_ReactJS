import React, { useState } from "react";
import Button from "../Button";

const Form = ({ className = "", btnText = "Submit", ...restProps }) => {
  const { handleAdd } = restProps;

  const [input, setInput] = useState("");

  const _onSubmit = (e) => {
    e.preventDefault();
    handleAdd(input);
    setInput("");
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
      />
      <Button className="btnAction">{btnText}</Button>
    </form>
  );
};

export default Form;
