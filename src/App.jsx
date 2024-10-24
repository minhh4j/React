import React, { useState } from "react";
import "./App.css"

export default function App() {
  const [isDarckMode, setDarckMode] = useState(false);
  const toggleTheme = () => {
    setDarckMode((prveMode) => !prveMode);
  };

  return (
    <div className={`App ${isDarckMode ? "darck" : "laight"}`}>
      <header className="App-header">
        <h1>{isDarckMode ? "Darck Mode" : "Light Mode"}</h1>
        <button className="" onClick={toggleTheme}>
          Change Theam
        </button>
      </header>
    </div>
  );
}
