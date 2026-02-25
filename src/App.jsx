import React, { useState, useEffect, useMemo } from "react";

import Header from "./components/layout/Header.jsx";
import StatsBar from "./components/layout/StatsBar.jsx";
import Toolbar from "./components/toolbar/Toolbar.jsx";
import StudentCard from "./components/student/StudentCard.jsx";
import StudentRow from "./components/student/StudentRow.jsx";
import StudentFormModal from "./components/student/StudentFormModal.jsx";
import MarksModal from "./components/student/MarksModal.jsx";

import { calcOverallGPA } from "./utils/gradeUtils.js";
import { SEED_DATA } from "./data/seedData.js";

import "./styles/variables.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";

/**
 * App Component - Now with Stage 2 rendering (Full App)
 * We are rendering the full application structure now.
 */
export default function App() {

  // ── State ──────────────────────────────────────────────────
  const [students, setStudents] = useState(() => {
    try {
      const stored = localStorage.getItem("student_directory");
      if (!stored) return SEED_DATA;
      const parsed = JSON.parse(stored);
      // Validate that parsed data is actually a non-empty array
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      return SEED_DATA;
    } catch (err) {
      console.error("App: localStorage initialization error", err);
      return SEED_DATA;
    }
  });

  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sort, setSort] = useState("name-asc");
  const [viewMode, setViewMode] = useState("grid");
  const [theme, setTheme] = useState("dark");
  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [showMarksModal, setShowMarksModal] = useState(false);
  const [viewMarksStudent, setViewMarksStudent] = useState(null);

  // ── Persistence ────────────────────────────────────────────
  useEffect(() => {
    try {
      localStorage.setItem("student_directory", JSON.stringify(students));
    } catch (e) {
      console.error("App: Failed to save to localStorage", e);
    }
  }, [students]);

  // ── Theme ──────────────────────────────────────────────────
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ── Filtered + Sorted List ─────────────────────────────────
  const filtered = useMemo(() => {
    try {
      let list = students.filter((s) => {
        if (!s || !s.name) return false;
        const matchName = (s.name || "").toLowerCase().includes((search || "").toLowerCase());
        const matchCourse = filterCourse === "All" || s.course === filterCourse;
        const matchStatus =
          filterStatus === "All" ||
          (filterStatus === "Present" ? s.isPresent : !s.isPresent);
        return matchName && matchCourse && matchStatus;
      });

      switch (sort) {
        case "name-asc": list.sort((a, b) => (a.name || "").localeCompare(b.name || "")); break;
        case "name-desc": list.sort((a, b) => (b.name || "").localeCompare(a.name || "")); break;
        case "gpa-high": list.sort((a, b) => calcOverallGPA(b.semesters) - calcOverallGPA(a.semesters)); break;
        case "gpa-low": list.sort((a, b) => calcOverallGPA(a.semesters) - calcOverallGPA(b.semesters)); break;
        default: break;
      }
      return list;
    } catch (e) {
      console.error("App: Filtering logic failed", e);
      return [];
    }
  }, [students, search, filterCourse, filterStatus, sort]);

  // ── Handlers ───────────────────────────────────────────────
  const handleToggle = (id) => setStudents(prev => prev.map(s => s.id === id ? { ...s, isPresent: !s.isPresent } : s));
  const handleDelete = (id) => {
    if (window.confirm("Remove this student?")) {
      setStudents(prev => prev.filter(s => s.id !== id));
    }
  };
  const handleEdit = (s) => { setEditStudent(s); setShowModal(true); };
  const handleViewMarks = (s) => { setViewMarksStudent(s); setShowMarksModal(true); };


  return (
    <div className="app">
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        onAddStudent={() => { setEditStudent(null); setShowModal(true); }}
      />

      <main className="main">
        <StatsBar students={students} />

        <Toolbar
          search={search} onSearch={setSearch}
          filterCourse={filterCourse} onFilterCourse={setFilterCourse}
          filterStatus={filterStatus} onFilterStatus={setFilterStatus}
          sort={sort} onSort={setSort}
          viewMode={viewMode} onViewMode={setViewMode}
        />

        {filtered.length === 0 ? (
          <div className="empty-state">
            <h3>No results found</h3>
          </div>
        ) : viewMode === "grid" ? (
          <div className="students-grid">
            {filtered.map((s) => (
              <StudentCard key={s.id} student={s} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} onViewMarks={handleViewMarks} />
            ))}
          </div>
        ) : (
          <div className="students-list">
            {filtered.map((s) => (
              <StudentRow key={s.id} student={s} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} onViewMarks={handleViewMarks} />
            ))}
          </div>
        )}
      </main>

      {showModal && (
        <StudentFormModal
          initial={editStudent}
          onSave={(updated) => {
            setStudents(prev => editStudent ? prev.map(s => s.id === updated.id ? updated : s) : [...prev, updated]);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
      {showMarksModal && (
        <MarksModal
          student={viewMarksStudent}
          onClose={() => setShowMarksModal(false)}
        />
      )}
    </div>
  );
}
