import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          description,
          isDone: false,
          createdAt: new Date().toLocaleString()
        })
      );
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleAdd} className="add-task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
};

export default AddTask;
