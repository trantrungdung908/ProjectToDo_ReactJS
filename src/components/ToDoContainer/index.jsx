import React from "react";
import Form from "../Form";
import TodoItem from "../TodoItem";

const TodoContainer = () => {
  const todos = [
    {
      id: 1701098599234,
      label: "Task 1",
      isDone: false,
      isEditting: false,
    },
    {
      id: 1701098599254,
      label: "Task 2",
      isDone: true,
      isEditting: false,
    },
    {
      id: 1701098603079,
      label: "Task 3",
      isDone: false,
      isEditting: true,
    },
    {},
  ];

  const renderListItem = () => {
    return todos.map((todo, index) => {
      return (
        <TodoItem key={todo.id || index} todo={todo} index={index} />
        // <li key={todo.id}>
        //   {todo.isEditting ? (
        //     <Form />
        //   ) : (
        //     <>
        //       <div className="task">
        //         <label className="title">
        //           {index + 1}. {todo.label}
        //         </label>
        //       </div>
        //       <div className="action">
        //         <button className="btn btn-done">
        //           {todo.isDone ? "Undone" : "Done"}
        //         </button>
        //         <button className="btn btn-edit">Edit</button>
        //         <button className="btn btn-delete">Delete</button>
        //       </div>
        //     </>
        //   )}
        // </li>
      );
    });
  };
  return (
    <div className="container">
      <div className="wrapper-container">
        <h1 className="heading">To-Do List</h1>
        <Form className="formAdd" btnText="Add" />
        <ul className="listtask">{renderListItem()}</ul>
      </div>
    </div>
  );
};

export default TodoContainer;
