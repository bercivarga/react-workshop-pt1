import { useState } from 'react';

export default function TodoAdder(props) {
  const [todoName, setTodoName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.addTodo(todoName);
    setTodoName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='type your todo here'
        value={todoName}
        onChange={(event) => setTodoName(event.target.value)}
      />
    </form>
  )
}