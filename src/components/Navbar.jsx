import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="app-title">📝 My Todo App</h2>
      <span className="current-time">{time}</span>
    </nav>
  );
};

export default Navbar;
