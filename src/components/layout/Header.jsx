import Button from "../ui/Button.jsx";

export default function Header({ theme, onToggleTheme, onAddStudent }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <div>
            <h1 className="header__title">Student Directory</h1>
            <p className="header__sub">Academic Records</p>
          </div>
        </div>
        <div className="header__controls">
          <button className="theme-toggle" onClick={onToggleTheme}>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <Button variant="primary" onClick={onAddStudent}>
            Add Student
          </Button>
        </div>
      </div>
    </header>
  );
}
