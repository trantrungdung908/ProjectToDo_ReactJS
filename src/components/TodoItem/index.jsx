import React from "react";
import Form from "../Form";
import Button from "../Button";

const TodoItem = ({
  todo,
  index,
  handleDel,
  handleDone,
  handleEditMode,
  handleEditLabel,
}) => {
  if (!todo.id) return;

  return (
    <li>
      {todo.isEditting ? (
        <Form
          todoId={todo.id}
          handleSubmit={(value) => handleEditLabel(todo.id, value)}
          defaultValue={todo.label}
          className="formAdd"
          btnText="Save"
        />
      ) : (
        <>
          <div className="task">
            <label className={todo.isDone ? "title-done" : "title"}>
              {index + 1}. {todo.label}
            </label>
          </div>
          <div className="action">
            <Button
              onClick={() => handleDone(todo.id)}
              className="btn btn-done"
            >
              {todo.isDone ? "Undone" : "Done"}
            </Button>
            {!todo.isDone && (
              <Button
                onClick={() => handleEditMode(todo.id)}
                className="btn btn-edit"
              >
                Edit
              </Button>
            )}
            <Button
              onClick={() => handleDel(todo.id)}
              className="btn btn-delete"
            >
              Delete
            </Button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
