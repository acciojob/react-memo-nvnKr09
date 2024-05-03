import React, { useState } from 'react';

function ReactMemo() {
console.log('child rendered')
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function handleAddSkill(){
    if (input.trim() !== '' && input.length > 5) {
      setTodos([...todos, input]);
    }
  }

  return (
    <>
      <h1>React.memo</h1>
      <input id='skill-input' type="text" placeholder='Enter Skill...' value={input} onChange={e => setInput(e.target.value)} />
      <button id='skill-btn' onClick={handleAddSkill}>Add Skill</button>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    </>
  )
}

export default React.memo(ReactMemo);