import React, { useEffect, useState } from "react";
import Form from "../Form";
import TodoItem from "../TodoItem";
import axios from "axios";
import styled from "styled-components";

const TodoContainer = () => {
  // const [todos, setTodos] = useState(() => {
  //   return JSON.parse(localStorage.getItem("todos")) || [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    queryTodos();
  }, []);

  const queryTodos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://65092931f6553137159b0494.mockapi.io/todos`
      );
      if (response.data.length > 0) {
        setTodos(response.data.reverse());
      }
    } catch (error) {
      alert("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (value, onSuccess) => {
    if (value === "") return;
    setLoading(true);
    try {
      const payload = {
        label: value,
        isDone: false,
      };
      const res = await axios.post(
        "https://65092931f6553137159b0494.mockapi.io/todos",
        payload
      );
      if (res.data) {
        onSuccess?.();
        setTodos((prevTodos) => [res.data, ...prevTodos]);
      }
    } catch (error) {
      alert("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDel = async (id) => {
    if (!id) return;

    setLoading(true);
    try {
      const res = await axios.delete(
        `https://65092931f6553137159b0494.mockapi.io/todos/${id}`
      );
      if (res.data) {
        setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
      }
    } catch (error) {
      alert("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditMode = async (id) => {
    if (!id) return;

    let editTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, isEditting: !todo.isEditting } : todo;
    });

    setTodos(editTodo);
  };

  const handleDone = async (id) => {
    if (!id) return;

    setLoading(true);

    try {
      const changeTodo = todos.find((item) => item.id === id);
      const payload = { ...changeTodo, isDone: !changeTodo.isDone };
      console.log(payload);

      const res = await axios.put(
        `https://65092931f6553137159b0494.mockapi.io/todos/${id}`,
        payload
      );

      if (res.data) {
        const dataDone = todos.map((item) =>
          item.id === res.data.id ? { ...res.data } : item
        );
        setTodos(dataDone);
      }
    } catch (error) {
      alert("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditLabel = async (id, value) => {
    if (!id || !value) return;

    setLoading(true);

    try {
      const changeValue = todos.find((item) => item.id === id);

      const { isEditting, ...rest } = changeValue;
      const payload = { ...rest, label: value };

      const res = await axios.put(
        `https://65092931f6553137159b0494.mockapi.io/todos/${id}`,
        payload
      );

      if (res.data) {
        setTodos((preTodo) =>
          preTodo.map((item) =>
            item.id === res.data.id ? { ...res.data, isEditting: false } : item
          )
        );
      }
    } catch (error) {
      alert("Error", error);
    } finally {
      setLoading(false);
    }
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
    <StyledContainer>
      <StyledWrapper className="wrapper-container">
        <h1 className="heading">To-Do List</h1>
        <Form btnText="Add" handleSubmit={handleAdd} />
        <StyledList>{renderListItem()}</StyledList>
      </StyledWrapper>
      {loading && <StyledLoading />}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  max-width: 2560px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;

  .heading {
    font-size: 60px;
    text-align: center;
    font-weight: bold;
  }
`;

const StyledList = styled.ul`
  margin: 50px auto;
`;

const StyledLoading = styled.div`
  height: 100%;
  border-radius: 8px;
  background: black;
  cursor: not-allowed;
  opacity: 0.5;
  z-index: 1;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export default TodoContainer;
