import React from "react";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
