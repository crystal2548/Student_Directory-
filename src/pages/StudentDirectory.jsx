import { useState } from "react";
import StatsBar from "../components/StatsBar";
import Toolbar from "../components/Toolbar";
import StudentCard from "../components/StudentCard";
import StudentRow from "../components/StudentRow";
import StudentForm from "../components/StudentForm";
import MarksPanel from "../components/MarksPanel";
import { calcSemGPA, syncSemesters } from "../data/gradeHelpers";
import "./StudentDirectory.css";

// StudentDirectory is the main page component
// It holds all student state and passes handlers down — teacher's "lifted state" pattern
let StudentDirectory = ({ students, setStudents, showForm, setShowForm }) => {

  // UI control state — teacher's useState pattern
  let [search, setSearch] = useState("");
  let [filterCourse, setFilterCourse] = useState("All");
  let [filterStatus, setFilterStatus] = useState("All");
  let [sort, setSort] = useState("name-asc");
  let [viewMode, setViewMode] = useState("grid");
  let [editStudent, setEditStudent] = useState(null);
  let [viewMarksStudent, setViewMarksStudent] = useState(null);

  // ── Filtering ───────────────────────────────────────────────
  // Teacher's .filter() chaining pattern from FoodMenu/ListRendering
  let filtered = students.filter((s) => {
    let matchName = s.name.toLowerCase().includes(search.toLowerCase());
    let matchCourse = filterCourse === "All" || s.course === filterCourse;
    let matchStatus = filterStatus === "All"
      || (filterStatus === "Present" ? s.isPresent : !s.isPresent);
    return matchName && matchCourse && matchStatus;
  });

  // ── Sorting ─────────────────────────────────────────────────
  // Sort on a copy so we don't mutate state
  let sorted = [...filtered];
  if (sort === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "name-desc") sorted.sort((a, b) => b.name.localeCompare(a.name));

  // ── Top Performer Logic (Allows Ties) ──────────────────────
  let studentGPAs = students.map((s) => {
    let synced = syncSemesters(s.course, s.semesters);
    let activeGPAs = synced.map((sem) => calcSemGPA(sem)).filter((g) => g > 0);
    if (activeGPAs.length === 0) return 0;
    return +(activeGPAs.reduce((a, b) => a + b, 0) / activeGPAs.length).toFixed(2);
  });

  let maxGPA = Math.max(0, ...studentGPAs);

  // ── Event handlers — teacher's separate handler pattern ─────

  let handleSave = (student) => {
    if (editStudent) {
      // Edit: replace matching student
      setStudents(students.map((s) => s.id === student.id ? student : s));
    } else {
      // Add: append to array
      setStudents([...students, student]);
    }
    setShowForm(false);
    setEditStudent(null);
  };

  let handleDelete = (id) => {
    if (window.confirm("Remove this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  // Toggle boolean — teacher's setCount(count+1) pattern applied to boolean
  let handleToggleAttendance = (id) => {
    setStudents(
      students.map((s) => s.id === id ? { ...s, isPresent: !s.isPresent } : s)
    );
  };

  let handleEdit = (student) => {
    setEditStudent(student);
    setShowForm(true);
  };

  let handleViewMarks = (student) => {
    setViewMarksStudent(student);
  };

  let handleCloseForm = () => {
    setShowForm(false);
    setEditStudent(null);
  };

  let handleCloseMarks = () => {
    setViewMarksStudent(null);
  };

  return (
    <div className="directory">

      <StatsBar students={students} />

      <Toolbar
        search={search} onSearch={setSearch}
        filterCourse={filterCourse} onFilterCourse={setFilterCourse}
        filterStatus={filterStatus} onFilterStatus={setFilterStatus}
        sort={sort} onSort={setSort}
        viewMode={viewMode} onViewMode={setViewMode}
      />

      {/* ── Conditional rendering: empty state ── */}
      {sorted.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="8" y="6" width="32" height="36" rx="3" />
              <path d="M16 16h16M16 22h16M16 28h10" strokeLinecap="round" />
            </svg>
          </div>
          {/* Conditional rendering — ternary for different empty messages */}
          <h3>{students.length === 0 ? "No students yet" : "No results found"}</h3>
          <p>
            {students.length === 0
              ? "Click 'Add Student' to add your first record."
              : "Try adjusting your search or filter criteria."
            }
          </p>
        </div>
      ) : (
        // Conditional rendering — ternary for grid vs list
        viewMode === "grid" ? (
          <div className="students-grid">
            {sorted.map((s, idx) => {
              // Get this student's avg GPA from our calculation above
              // (Note: we use the index from the 'students' array mapping)
              let originalIndex = students.indexOf(s);
              let sGPA = studentGPAs[originalIndex];

              return (
                <StudentCard
                  key={s.id}
                  student={s}
                  isTopPerformer={maxGPA > 0 && sGPA === maxGPA}
                  onToggle={handleToggleAttendance}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onViewMarks={handleViewMarks}
                />
              );
            })}
          </div>
        ) : (
          <div className="students-list">
            {sorted.map((s) => {
              let originalIndex = students.indexOf(s);
              let sGPA = studentGPAs[originalIndex];

              return (
                <StudentRow
                  key={s.id}
                  student={s}
                  isTopPerformer={maxGPA > 0 && sGPA === maxGPA}
                  onToggle={handleToggleAttendance}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onViewMarks={handleViewMarks}
                />
              );
            })}
          </div>
        )
      )}

      {/* Conditional rendering — && to mount/unmount modal */}
      {showForm && (
        <StudentForm
          initial={editStudent}
          onSave={handleSave}
          onClose={handleCloseForm}
        />
      )}

      {viewMarksStudent && (
        <MarksPanel
          student={viewMarksStudent}
          onClose={handleCloseMarks}
        />
      )}

    </div>
  );
};

// Export handleAddNew so App/Navbar can trigger it
// We do this by returning it through a ref — simplest way: pass onAddStudent down
export { StudentDirectory as default };
