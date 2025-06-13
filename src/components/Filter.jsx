import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../taskSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.task.filter);

  return (
    <div className="filter-container">
      {["all", "done", "notDone"].map((type) => (
        <button
          key={type}
          onClick={() => dispatch(setFilter(type))}
          disabled={filter === type}
          className={`filter-button ${filter === type ? "active" : ""}`}
        >
          {type === "all" ? "All" : type === "done" ? "Done" : "Not Done"}
        </button>
      ))}
    </div>
  );
};

export default Filter;
