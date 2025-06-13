import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, newDescription } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.description = newDescription;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const {
  addTask,
  toggleTask,
  editTask,
  deleteTask,
  setFilter
} = taskSlice.actions;

export default taskSlice.reducer;
