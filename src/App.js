import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
}

export default App;
