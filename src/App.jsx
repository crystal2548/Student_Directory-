import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import StudentDirectory from "./pages/StudentDirectory";
import seedStudents from "./data/students";

let App = () => {
  // Debug alert to verify code sync
  if (typeof window !== 'undefined') {
    console.log("App loaded - v5_force_sync");
  }

  let [isDark, setIsDark] = useState(true);

  // Temporarily ignoring storage to force-load the hardcoded data
  let [students, setStudents] = useState(seedStudents);

  let [showForm, setShowForm] = useState(false);
  useEffect(() => {
    // Keep this to avoid breaking other logic, but we write to a new key
    localStorage.setItem("student_directory_force_sync", JSON.stringify(students));
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
