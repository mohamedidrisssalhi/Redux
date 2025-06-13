import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../taskSlice";

const Task = ({ id, description, isDone, createdAt }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDone = () => dispatch(toggleTask(id));
  const handleEdit = () => {
    if (isEditing && newDescription.trim()) {
      dispatch(editTask({ id, newDescription }));
    }
    setIsEditing(!isEditing);
  };
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(id));
    }
  };

  return (
    <div className="task-card">
      <div className="task-header" onClick={() => setIsOpen(!isOpen)}>
        <span className={`task-title ${isDone ? "done" : ""}`}>
          {description}
        </span>
        <span className="task-toggle">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="task-body">
          <p className="task-date">Created: {createdAt}</p>
          <div className="task-controls">
            <label>
              <input
                type="checkbox"
                checked={isDone}
                onChange={handleToggleDone}
              />
              Mark as done
            </label>

            {isEditing ? (
              <>
                <input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="edit-input"
                />
                <button onClick={handleEdit}>Save</button>
              </>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}

            <button onClick={handleDelete} className="delete-button">
              🗑 Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
