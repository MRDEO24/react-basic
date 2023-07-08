export const Task = (props) => {
  // props can pass variable and function
  return (
    <div className="task">
      <h1 style={{ color: props.complete ? "red" : "black" }}>{props.taskName}</h1>
      <button
        onClick={() => {
          props.completeTask(props.id);
        }}
      >
        Complete
      </button>
      <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  );
};
