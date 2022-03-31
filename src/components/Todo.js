export default function Todo(props) {
  return (
    <div className='todo'>
      <span>☑️</span>
      <h4>{props.todoName}</h4>
    </div>
  )
}