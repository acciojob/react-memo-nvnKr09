import React, { useMemo, useState } from "react";
import ReactMemo from "./ReactMemo";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(()=>expensiveCalculation(count), [count]);
 
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((todo) => [...todo, "New Todo"]);
  };

  
  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p id={`todo-${index}`} key={index}>{todo}</p>;
        })}
        <button id="add-todo-btn" onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button id="incr-btn" onClick={increment}>0</button>
        <h2>Expensive Calculation</h2>
        <p  id="calc">{calculation}</p>
      </div>
      <hr/>
      <hr/>
      <ReactMemo />
    </div>
  )}

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

export default UseMemo;
