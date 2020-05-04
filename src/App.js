import React, { useState } from 'react';

function Todo(props) {
  return (
    <p >{props.todo.text}</p>
  )
}

function FillForm({ addToDo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("value" + value);
    if (!value) return;
    addToDo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="Add a Todo" onChange={(e) => { setValue(e.target.value) }} />
    </form>
  )
}

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Learn React Lifecycle",
      isCompleted: false
    },
    {
      text: "Learn React Redux",
      isCompleted: false
    },
    {
      text: "Learn React Hooks",
      isCompleted: false
    },
    {
      text: "Buy Groceries",
      isCompleted: false
    }
  ])

  console.log(todos);

  const addToDo = text => {
    const newToDos = [...todos, { text }]
    setTodos(newToDos)
  }

  return (
    <div>
      <div>
        {todos.map(
          (todo, index) => {
            console.log(todo);
            return <Todo key={index} index={index} todo={todo} />;
          }
        )}
      </div>
      <div>
        <FillForm addToDo={addToDo} />
      </div>
    </div>
  )
}


export default App;
