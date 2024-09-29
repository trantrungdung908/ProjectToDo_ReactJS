import React, { useState } from "react";
import Form from "../Form";
import TodoItem from "../TodoItem";

const TodoContainer = () => {
  // const todos = [
  //   {
  //     id: 1701098599234,
  //     label: "Task 1",
  //     isDone: false,
  //     isEditting: false,
  //   },
  //   {
  //     id: 1701098599254,
  //     label: "Task 2",
  //     isDone: true,
  //     isEditting: false,
  //   },
  //   {
  //     id: 1701098603079,
  //     label: "Task 3",
  //     isDone: false,
  //     isEditting: true,
  //   },
  //   {},
  // ];

  const [todos, setTodos] = useState([]);

  const handleAdd = (value) => {
    if (value === "") return;
    const newTodo = {
      id: Date.now(),
      label: value,
      isDone: false,
      isEditting: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDel = (id) => {
    let filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  const handleEditMode = (id) => {
    let editTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, isEditting: !todo.isEditting } : todo;
    });

    setTodos(editTodo);
  };

  const handleDone = (id) => {
    let doneTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(doneTodo);
  };

  const handleEditLabel = (id, value) => {
    let editLabel = todos.map((item) =>
      item.id === id
        ? { ...item, label: value, isEditting: !item.isEditting }
        : item
    );
    setTodos(editLabel);
  };
  const renderListItem = () => {
    return todos.map((todo, index) => {
      return (
        <TodoItem
          key={todo.id || index}
          todo={todo}
          index={index}
          handleDel={handleDel}
          handleDone={handleDone}
          handleEditMode={handleEditMode}
          handleEditLabel={handleEditLabel}
        />
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
        <Form className="formAdd" btnText="Add" handleSubmit={handleAdd} />
        <ul className="listtask">{renderListItem()}</ul>
      </div>
    </div>
  );
};

export default TodoContainer;
