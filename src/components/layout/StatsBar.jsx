import { calcOverallGPA, getPerformanceLabel } from "../../utils/gradeUtils.js";

export default function StatsBar({ students = [] }) {
  const total = students?.length || 0;
  const present = students.filter((s) => s?.isPresent).length;
  const distinction = students.filter(
    (s) => s?.semesters && getPerformanceLabel(calcOverallGPA(s.semesters)) === "Distinction"
  ).length;

  return (
    <div className="stats-bar">
      <div className="stat-card">
        <span className="stat-card__num">{total}</span>
        <span className="stat-card__label">Total Students</span>
      </div>
      <div className="stat-card stat-card--green">
        <span className="stat-card__num">{present}</span>
        <span className="stat-card__label">Present Today</span>
      </div>
      <div className="stat-card stat-card--gold">
        <span className="stat-card__num">{distinction}</span>
        <span className="stat-card__label">Distinction</span>
      </div>
    </div>
  );
}
