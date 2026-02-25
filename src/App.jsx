import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import StudentDirectory from "./pages/StudentDirectory";
import seedStudents from "./data/students";

let App = () => {

  let [isDark, setIsDark] = useState(true);

  let [students, setStudents] = useState(() => {
    try {
      let stored = localStorage.getItem("student_directory");
      return stored ? JSON.parse(stored) : seedStudents;
    } catch (e) {
      return seedStudents;
    }
  });

  let [showForm, setShowForm] = useState(false);
  useEffect(() => {
    localStorage.setItem("student_directory", JSON.stringify(students));
  }, [students]);

  let handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  let handleAddStudent = () => {
    setShowForm(true);
  };

  return (
    <div className={`app ${isDark ? "" : "light"}`}
      style={{ minHeight: "100vh", backgroundColor: "var(--bg)", transition: "background-color 0.2s ease" }}
    >
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onAddStudent={handleAddStudent}
      />

      <StudentDirectory
        students={students}
        setStudents={setStudents}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
  );
};

export default App;
