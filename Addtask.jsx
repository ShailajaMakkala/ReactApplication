import { useState } from "react";

function AddTask() {
  const [count, setCount] = useState([]); // Stores a list of task names.

  const addTask = () => {
    setCount((prevCount) => [...prevCount, "Task-" + (prevCount.length + 1)]);
  };

  const listoftask=count.map((task, index) => (
    <li key={index}>{task}</li>
  ))

  return (
    <>
      <h1>Task List</h1>
      <button onClick={addTask}>Add Task</button>
      <ul>{listoftask}</ul>
    </>
  );
}

export default AddTask;
