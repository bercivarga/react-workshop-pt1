export default function Todo(props) {
  function handleTodoCheck() {
    props.deleteTodo(props.todoName);
  }

  return (
    <div className='todo'>
      <button type="button" onClick={handleTodoCheck}>delete</button>
      <h4>{props.todoName}</h4>
    </div>
  )
}