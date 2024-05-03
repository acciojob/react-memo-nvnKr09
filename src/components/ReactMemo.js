import React, { memo, useState } from 'react';

function ReactMemo() {
console.log('child rendered')
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleAddSkill(){
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
    }
  }

  return (
    <>
      <h1>React.memo</h1>
      <input type="text" placeholder='Enter Skill...' value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={handleAddSkill}>Add Skill</button>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    </>
  )
}

export default memo(ReactMemo);