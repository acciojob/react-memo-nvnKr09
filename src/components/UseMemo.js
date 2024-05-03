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
    setTodos((todo) => [...todo, "New todo"]);
  };

  
  return (
    <>
    <h1>React.useMemo</h1>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <hr/>
      <hr/>
      <ReactMemo />
    </>
  )}

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

export default UseMemo;