import React from "react";
import Form from "../Form";
import Button from "../Button";

const TodoItem = ({ todo, index }) => {
  if (!todo.id) return;
  return (
    <li>
      {todo.isEditting ? (
        <Form className="formAdd" btnText="Save" />
      ) : (
        <>
          <div className="task">
            <label className={todo.isDone ? "title-done" : "title"}>
              {index + 1}. {todo.label}
            </label>
          </div>
          <div className="action">
            <Button className="btn btn-done">
              {todo.isDone ? "Undone" : "Done"}
            </Button>
            {!todo.isDone && <Button className="btn btn-edit">Edit</Button>}
            <Button className="btn btn-delete">Delete</Button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
