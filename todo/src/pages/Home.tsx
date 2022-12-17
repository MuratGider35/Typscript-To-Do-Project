import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6352adb1d0bca53a8eb27f5c.mockapi.io/api/task/todos";

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const getTodos = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
