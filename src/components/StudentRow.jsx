import { useState } from "react";
import Badge from "./Badge";
import Button from "./Button";
import { calcSemGPA, syncSemesters } from "../data/gradeHelpers";
import "./StudentRow.css";

let StudentRow = ({ student, isTopPerformer, onToggle, onDelete, onEdit, onViewMarks }) => {

  let synced = syncSemesters(student.course, student.semesters);
  let activeSemesters = synced
    .map((s, i) => ({
      gpa: calcSemGPA(s),
      index: i,
      hasMarks: s.some(sub => sub.theory > 0 || sub.practical > 0)
    }))
    .filter((s) => s.hasMarks);

  return (
    <div className={`student-row ${!student.isPresent ? "student-row-absent" : ""}`}>

      <div className="row-main">
        <div
          className="row-avatar"
          style={{ background: "linear-gradient(135deg, #4f8ef7, #7c5af0)" }}
        >
          {student.name.charAt(0).toUpperCase()}
        </div>

        <div className="row-info">
          <span className="row-name">{student.name}</span>
          <span className="row-meta">{student.rollNo} &middot; {student.course}</span>
        </div>

        <div className="row-badges">
          <Badge type={student.isPresent ? "success" : "danger"}>
            {student.isPresent ? "Present" : "Absent"}
          </Badge>
          {isTopPerformer && <Badge type="warning">⭐ Top Performer</Badge>}
          {activeSemesters.map((s) => (
            <Badge key={s.index} type="info">
              {student.course === "BBS" ? "Y" : "S"}{s.index + 1}: {s.gpa}
            </Badge>
          ))}
        </div>

        <div className="row-actions">
          <Button variant="ghost" size="sm" onClick={() => onViewMarks(student)}>
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
      </div >

    </div >
  );
};

export default StudentRow;
