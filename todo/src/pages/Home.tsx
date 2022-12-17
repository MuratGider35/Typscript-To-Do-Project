import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6352adb1d0bca53a8eb27f5c.mockapi.io/api/task/todos";
interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}
const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
