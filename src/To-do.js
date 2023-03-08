import React, { useState } from 'react';


function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddTodo() {
    if (inputValue) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <h1>Shopping list</h1>
        <div className="container">

            <div className="left">
                <form id="form">
                    <label>What do we need to buy?</label>
                    <br />
                    <textarea 
                    type="text" 
                    placeholder="Add a new to-do..."
                    value={inputValue} 
                    onChange={handleInputChange} 
                    name="post" 
                    id="input" 
                    cols="30" rows="10"></textarea>
                    <br />
                    <div id="msg"></div>
                    <button type="submit">Post</button>
                </form>
            </div>
            <div className="right">
                <h3>List</h3>
                <div id="posts">
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

                    
                </div>
          </div>
        </div>
    </div>
  );
}

export default Todo;
