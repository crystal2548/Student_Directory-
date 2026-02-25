import { useState, useEffect } from "react";
import Badge from "./Badge";
import Button from "./Button";
import { courses, subjectsByCourse, semesterCount } from "../data/courseData";
import { generateId, makeEmptySemesters, getGradeInfo, syncSemesters } from "../data/gradeHelpers";
import "./StudentForm.css";

let StudentForm = ({ initial, onSave, onClose }) => {

  let isEdit = !!initial;

  let [name, setName] = useState(initial ? initial.name : "");
  let [rollNo, setRollNo] = useState(initial ? initial.rollNo : "");
  let [course, setCourse] = useState(initial ? initial.course : courses[0]);
  let [semesters, setSemesters] = useState(initial ? syncSemesters(initial.course, initial.semesters) : makeEmptySemesters(courses[0]));
  let [activeSem, setActiveSem] = useState(0);
  let [errors, setErrors] = useState({});

  // When course changes on a NEW student, reset semesters
  useEffect(() => {
    if (!isEdit) {
      setSemesters(makeEmptySemesters(course));
      setActiveSem(0);
    }
  }, [course]);

  let handleNameChange = (ev) => {
    setName(ev.target.value);
  };

  let handleRollNoChange = (ev) => {
    setRollNo(ev.target.value);
  };

  let handleCourseChange = (ev) => {
    setCourse(ev.target.value);
  };

  let handleSemTabClick = (index) => {
    setActiveSem(index);
  };

  // Update a single mark — immutable update pattern
  let handleMarkChange = (si, subi, field, ev) => {
    let sub = semesters[si][subi];
    let fm = field === "theory" ? sub.theoryFM : sub.practicalFM;
    let val = Number(ev.target.value) || 0;

    // Copy the whole array immutably before setting
    let copy = semesters.map((sem) => sem.map((sub) => ({ ...sub })));
    copy[si][subi][field] = val;
    setSemesters(copy);
  };

  // Basic validation before saving
  let validate = () => {
    let e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!rollNo.trim()) e.rollNo = "Roll number is required";
    setErrors(e);
    // Returns true only if no errors
    return Object.keys(e).length === 0;
  };

  let handleSave = () => {
    if (!validate()) return;

    onSave({
      id: isEdit ? initial.id : generateId(),
      name: name.trim(),
      rollNo: rollNo.trim(),
      course,
      semesters,
      isPresent: isEdit ? initial.isPresent : true,
    });
  };

  // Close if user clicks the dark overlay behind the modal
  let handleOverlayClick = (ev) => {
    if (ev.target === ev.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">

        <div className="modal-header">
          {/* Conditional rendering — ternary for title */}
          <h2>{isEdit ? "Edit Student" : "Add Student"}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">

          {/* Two-column form row */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="s-name">Full Name *</label>
              <input
                id="s-name"
                className={`form-input ${errors.name ? "form-input-error" : ""}`}
                value={name}
                onChange={handleNameChange}
                placeholder="e.g. Aarav Sharma"
              />
              {/* Conditional rendering — && short circuit for error message */}
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="s-roll">Roll Number *</label>
              <input
                id="s-roll"
                className={`form-input ${errors.rollNo ? "form-input-error" : ""}`}
                value={rollNo}
                onChange={handleRollNoChange}
                placeholder="e.g. 076BSCCSIT001"
              />
              {errors.rollNo && <span className="form-error">{errors.rollNo}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="s-course">Course</label>
            <select
              id="s-course"
              className="form-input form-select"
              value={course}
              onChange={handleCourseChange}
            >
              {/* list rendering with .map() */}
              {courses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Semester tabs */}
          <div className="sem-tabs">
            <div className="sem-tabs-header">
              {semesters.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`sem-tab ${activeSem === i ? "sem-tab-active" : ""}`}
                  onClick={() => handleSemTabClick(i)}
                >
                  {course === "BBS" ? "Year " : "Sem "}{i + 1}
                </button>
              ))}
            </div>

            <div className="sem-tabs-body">
              <table className="marks-entry-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Theory Marks</th>
                    <th>Practical Marks</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {semesters[activeSem].map((sub, subi) => {
                    let fullTotal = (sub.theoryFM || 0) + (sub.practicalFM || 0);
                    let obtained = (sub.theory || 0) + (sub.practical || 0);
                    let pct = fullTotal > 0 ? (obtained / fullTotal) * 100 : 0;

                    // TU Passing Logic: 40% in each component
                    let theoryPass = sub.theoryFM > 0 ? (sub.theory / sub.theoryFM >= 0.4) : true;
                    let practicalPass = sub.practicalFM > 0 ? (sub.practical / sub.practicalFM >= 0.4) : true;

                    let info = sub.theory > 0 || sub.practical > 0
                      ? ((theoryPass && practicalPass) ? getGradeInfo(pct) : { grade: "F", gpa: 0 })
                      : null;

                    let badgeType = info
                      ? (info.gpa >= 3.7 ? "success"
                        : info.gpa >= 2.7 ? "info"
                          : info.gpa >= 2.0 ? "warning"
                            : "danger")
                      : "neutral";

                    return (
                      <tr key={`${activeSem}-${subi}`}>
                        <td className="sub-name">
                          {sub.name}
                        </td>
                        <td>
                          {sub.theoryFM > 0 ? (
                            <input
                              type="number"
                              className="marks-input"
                              min="0"
                              max={sub.theoryFM}
                              value={sub.theory || ""}
                              onChange={(ev) => handleMarkChange(activeSem, subi, "theory", ev)}
                              placeholder={`0–${sub.theoryFM}`}
                            />
                          ) : <span className="marks-na">—</span>}
                        </td>
                        <td>
                          {sub.practicalFM > 0 ? (
                            <input
                              type="number"
                              className="marks-input"
                              min="0"
                              max={sub.practicalFM}
                              value={sub.practical || ""}
                              onChange={(ev) => handleMarkChange(activeSem, subi, "practical", ev)}
                              placeholder={`0–${sub.practicalFM}`}
                            />
                          ) : <span className="marks-na">—</span>}
                        </td>
                        <td>
                          {/* Conditional rendering — ternary: show badge or dash */}
                          {info
                            ? <Badge type={badgeType}>{info.grade}</Badge>
                            : <span className="marks-na">—</span>
                          }
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="modal-footer">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>
            {isEdit ? "Save Changes" : "Add Student"}
          </Button>
        </div>

      </div>
    </div>
  );
};

export default StudentForm;
