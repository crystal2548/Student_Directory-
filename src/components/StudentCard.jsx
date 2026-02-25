import { useState } from "react";
import Badge from "./Badge";
import Button from "./Button";
import { calcSemGPA } from "../data/gradeHelpers";
import "./StudentCard.css";

// Destructured prop
let StudentCard = ({ student, isTopPerformer, onToggle, onDelete, onEdit, onViewMarks }) => {


  // Count only semesters that have at least one mark entered
  let activeSemesters = student.semesters
    .map((s, i) => ({ gpa: calcSemGPA(s), index: i }))
    .filter((s) => s.gpa > 0);

  let semCount = activeSemesters.length;

  //  separate handler pattern
  let handleDelete = () => {
    onDelete(student.id);
  };

  let handleEdit = () => {
    onEdit(student);
  };

  let handleToggleAttendance = () => {
    onToggle(student.id);
  };

  let handleViewMarks = () => {
    onViewMarks(student);
  };

  return (
    <div className={`student-card ${!student.isPresent ? "student-card-absent" : ""}`}>

      <div className="card-header">
        <div
          className="card-avatar"
          style={{
            background: "linear-gradient(135deg, #4f8ef7, #7c5af0)"
          }}
        >
          {student.name.charAt(0).toUpperCase()}
        </div>

        <div className="card-title">
          <h3 className="card-name">{student.name}</h3>
          <p className="card-roll">{student.rollNo}</p>
        </div>

        <Badge type={student.isPresent ? "success" : "danger"}>
          {student.isPresent ? "Present" : "Absent"}
        </Badge>
      </div>

      <div className="card-course">
        <Badge type="neutral">{student.course}</Badge>
        {isTopPerformer && <Badge type="warning">⭐ Top Performer</Badge>}
      </div>

      <div className="card-stats">
        <div className="card-stat">
          <span className="card-stat-val">{semCount}</span>
          <span className="card-stat-key">{student.course === "BBS" ? "Years" : "Semesters"} active</span>
        </div>
      </div>

      <div className="card-gpa-list">
        {activeSemesters.map((s) => (
          <Badge key={s.index} type="info" size="sm">
            {student.course === "BBS" ? "Y" : "S"}{s.index + 1}: {s.gpa}
          </Badge>
        ))}
        {semCount === 0 && <span className="no-marks">No marks yet</span>}
      </div>

      <div className="card-actions">
        <Button variant="outline" size="sm" onClick={handleToggleAttendance}>
          {student.isPresent ? "Mark Absent" : "Mark Present"}
        </Button>
        <Button variant="ghost" size="sm" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Remove
        </Button>
      </div>

      <button className="expand-btn" onClick={handleViewMarks}>
        View Marks
      </button>

    </div>
  );
};

export default StudentCard;
