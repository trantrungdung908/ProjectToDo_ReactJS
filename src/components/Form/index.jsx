import React from "react";

const Form = () => {
  return (
    <form className="form formAdd">
      <input
        placeholder="Add your task"
        type="text"
        className="input-text"
        id="inputTask"
      />
      <button className="btnAction">ADD</button>
    </form>
  );
};

export default Form;
