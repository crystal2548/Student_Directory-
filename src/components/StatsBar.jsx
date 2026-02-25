import { calcSemGPA, syncSemesters } from "../data/gradeHelpers";
import "./StatsBar.css";

let StatsBar = ({ students }) => {
  let total = students.length;

  // List rendering with .filter()
  let presentCount = students.filter((s) => s.isPresent).length;

  // Calculate top performers
  let topGPA = 0;
  let topCount = 0;

  // 1st pass: find max GPA
  let studentGPAs = students.map((s) => {
    let synced = syncSemesters(s.course, s.semesters);
    let activeGPAs = synced
      .map((sem) => calcSemGPA(sem))
      .filter((gpa) => gpa > 0);

    if (activeGPAs.length === 0) return 0;
    return +(activeGPAs.reduce((a, b) => a + b, 0) / activeGPAs.length).toFixed(2);
  });

  topGPA = Math.max(0, ...studentGPAs);

  // 2nd pass: count how many have that GPA (if GPA > 0)
  if (topGPA > 0) {
    topCount = studentGPAs.filter(gpa => gpa === topGPA).length;
  }

  return (
    <div className="stats-bar">
      <div className="stat-card stat-card-accent">
        <span className="stat-num">{total}</span>
        <span className="stat-label">Total Students</span>
      </div>

      <div className="stat-card stat-card-accent">
        <span className="stat-num">{presentCount}</span>
        <span className="stat-label">Present Today</span>
      </div>

      <div className="stat-card stat-card-accent">
        <span className="stat-num">{topGPA > 0 ? topCount : 0}</span>
        <span className="stat-label">Top Performer</span>
      </div>
    </div>
  );
};

export default StatsBar;
