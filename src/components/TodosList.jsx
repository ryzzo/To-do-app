const TodosList = (props) => {
    return (
      <ul>
        {todos == props.todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  };
  export default TodosList;
  