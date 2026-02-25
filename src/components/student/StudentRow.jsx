import React from "react";
import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import {
  calcOverallGPA,
  getPerformanceLabel,
  getPerformanceBadgeType,
} from "../../utils/gradeUtils.js";

export default function StudentRow({ student, onToggle, onDelete, onEdit, onViewMarks }) {
  const overallGPA = calcOverallGPA(student.semesters, student.course);
  const perf = getPerformanceLabel(overallGPA);
  const perfType = getPerformanceBadgeType(perf);

  return (
    <div className={`student-row${!student.isPresent ? " student-row--absent" : ""}`}>
      <div className="student-row__main">
        <div className="student-row__avatar">
          {student.name.charAt(0).toUpperCase()}
        </div>

        <div className="student-row__info">
          <span className="student-row__name">{student.name}</span>
          <span className="student-row__meta">
            {student.rollNo} &middot; {student.course}
          </span>
        </div>

        <div className="student-row__badges">
          <Badge type={student.isPresent ? "success" : "danger"}>
            {student.isPresent ? "Present" : "Absent"}
          </Badge>
          <Badge type={perfType}>{perf}</Badge>
          {overallGPA > 0 && (
            <Badge type="info">GPA {overallGPA.toFixed(2)}</Badge>
          )}
        </div>

        <div className="student-row__actions">
          <Button variant="outline" size="sm" onClick={() => onViewMarks(student)}>
            View Marks
          </Button>
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
      </div>
    </div>
  );
}
