import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import TodoAdder from './components/TodoAdder';
import './styles.css';

const ogTodos = [
  "Feed cat",
  "Prepare workshop",
  "Get home",
  "Go to gym"
];

function App() {
  const [todos, setTodos] = useState(ogTodos);

  function addTodo(todo) {
    const updatedArray = Array.from(todos);
    updatedArray.push(todo);
    setTodos(updatedArray);
  }

  return (
    <div>
      <h1>My Todos</h1>
      {
        todos.map((todo) => <Todo todoName={todo} />)
      }
      <TodoAdder addTodo={addTodo} />
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));