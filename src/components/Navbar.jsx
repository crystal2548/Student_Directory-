import { useState } from "react";
import "./Navbar.css";

// Navbar — theme toggle and Add Student button live here
let Navbar = ({ isDark, onToggleTheme, onAddStudent }) => {

  let [search, setSearch] = useState("");

  let handleSearchChange = (ev) => {
    setSearch(ev.target.value);
    // bubble the value up if parent needs it — but for now just local
  };

  return (
    <div className={`navbar ${isDark ? "navbar-dark" : "navbar-light"}`}>
      <div className="navbar-brand">

        <div>
          <h1 className="navbar-title">Student Directory</h1>
          <p className="navbar-sub">Academic Records</p>
        </div>
      </div>

      <div className="navbar-controls">
        <button
          className="theme-btn"
          onClick={onToggleTheme}
        >
          {/* Conditional rendering —  */}
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>

        <button className="add-btn" onClick={onAddStudent}>
          Add Student
        </button>
      </div>
    </div>
  );
};

export default Navbar;
