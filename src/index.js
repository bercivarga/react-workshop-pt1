import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import TodoAdder from './components/TodoAdder';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);
  
  async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
   
    // if (!response.ok) {
    //   setError(true);
    //   setLoading(false);
    //   return;
    // }

    const data = await response.json();

    const splicedData = data.splice(0, 10);
    const onlyNames = splicedData.map(obj => obj.title);

    setTimeout(() => {
      setTodos(onlyNames);
      setLoading(false);
    }, 2000);
  }

  function addTodo(todo) {
    const updatedArray = Array.from(todos);
    updatedArray.push(todo);
    setTodos(updatedArray);
  }

  function deleteTodo(todoName) {
    const updatedArray = todos.filter((todo) => todo !== todoName);
    setTodos(updatedArray);
  }

  return (
    <div>
      <h1>My Todos</h1>
      {
        loading && <h2>Loading...</h2>
      }
      {
        error && <h2>Something went wrong...</h2>
      }
      {
        todos.map((todo, index) => <Todo key={index} todoName={todo} deleteTodo={deleteTodo} />)
      }
      <TodoAdder addTodo={addTodo} />
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));