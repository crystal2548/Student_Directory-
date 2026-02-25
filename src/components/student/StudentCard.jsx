import React from "react";
import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import {
  calcOverallGPA,
  getPerformanceLabel,
  getPerformanceBadgeType,
} from "../../utils/gradeUtils.js";

export default function StudentCard({ student, onToggle, onDelete, onEdit, onViewMarks }) {
  const overallGPA = calcOverallGPA(student.semesters);
  const perf = getPerformanceLabel(overallGPA);
  const perfType = getPerformanceBadgeType(perf);

  const semCount = student.semesters.filter((s) =>
    s.some((sub) => (sub.theory || 0) > 0 || (sub.practical || 0) > 0)
  ).length;

  return (
    <div className={`student-card${!student.isPresent ? " student-card--absent" : ""}`}>
      <div className="student-card__header">
        <div className="student-card__avatar">
          {student.name.charAt(0).toUpperCase()}
        </div>
        <div className="student-card__title">
          <h3 className="student-card__name">{student.name}</h3>
          <p className="student-card__roll">{student.rollNo}</p>
        </div>
        <Badge type={student.isPresent ? "success" : "danger"}>
          {student.isPresent ? "Present" : "Absent"}
        </Badge>
      </div>

      <div className="student-card__course">
        <Badge type="neutral">{student.course}</Badge>
      </div>

      <div className="student-card__stats">
        <div className="stat">
          <span className="stat__val">
            {overallGPA > 0 ? overallGPA.toFixed(2) : "—"}
          </span>
          <span className="stat__key">Overall GPA</span>
        </div>
        <div className="stat">
          <span className="stat__val">{semCount}</span>
          <span className="stat__key">Semesters</span>
        </div>
        <div className="stat">
          <Badge type={perfType}>{perf}</Badge>
          <span className="stat__key">Performance</span>
        </div>
      </div>

      <div className="student-card__actions">
        <Button variant="outline" size="sm" onClick={() => onToggle(student.id)}>
          {student.isPresent ? "Mark Absent" : "Mark Present"}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onEdit(student)}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => onDelete(student.id)}>
          Remove
        </Button>
      </div>

      <button className="expand-btn" onClick={() => onViewMarks(student)}>
        View Marks
      </button>
    </div>
  );
}
