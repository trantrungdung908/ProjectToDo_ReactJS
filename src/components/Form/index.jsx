import React from "react";
import Button from "../Button";

const Form = ({ className = "", btnText = "Submit", ...restProps }) => {
  return (
    <form className={`form ${className}`}>
      <input
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
