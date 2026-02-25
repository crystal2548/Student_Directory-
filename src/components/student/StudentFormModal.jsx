import { useState } from "react";

import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import Badge from "../ui/Badge.jsx";
import { COURSES } from "../../constants/courses.js";
import {
  generateId,
  makeEmptySemesters,
  getGradeInfo,
  findSubjectMeta,
} from "../../utils/gradeUtils.js";

export default function StudentFormModal({ initial, onSave, onClose }) {
  const isEdit = !!initial;

  const [name, setName] = useState(initial?.name ?? "");
  const [rollNo, setRollNo] = useState(initial?.rollNo ?? "");
  const [course, setCourse] = useState(initial?.course ?? COURSES[0]);
  const [activeSem, setActiveSem] = useState(0);
  const [semesters, setSemesters] = useState(
    () => initial?.semesters ?? makeEmptySemesters(COURSES[0])
  );
  const [errors, setErrors] = useState({});

  function handleCourseChange(e) {
    const newCourse = e.target.value;
    setCourse(newCourse);
    if (!isEdit) {
      setSemesters(makeEmptySemesters(newCourse));
      setActiveSem(0);
    }
  }

  function updateMark(si, subi, field, raw) {
    const val = Math.max(0, Number(raw) || 0);
    setSemesters((prev) => {
      const copy = prev.map((sem) => sem.map((sub) => ({ ...sub })));
      copy[si][subi][field] = val;
      return copy;
    });
  }

  function validate() {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!rollNo.trim()) e.rollNo = "Roll number is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    onSave({
      id: initial?.id ?? generateId(),
      name: name.trim(),
      rollNo: rollNo.trim(),
      course,
      semesters,
      isPresent: initial?.isPresent ?? true,
    });
  }

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <div className="modal__header">
          <h2>{isEdit ? "Edit Student" : "Add Student"}</h2>
          <button className="modal__close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        <div className="modal__body">
          <div className="form-row">
            <Input
              label="Full Name *"
              id="student-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              autoComplete="nope"
              name="student-name-field"
            />
            <Input
              label="Roll Number *"
              id="student-roll"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              error={errors.rollNo}
              autoComplete="nope"
              name="student-roll-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="student-course" className="input-label">Course</label>
            <select
              id="student-course"
              className="input-field select-field"
              value={course}
              onChange={handleCourseChange}
            >
              {COURSES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="sem-tabs">
            <div className="sem-tabs__header">
              {semesters.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`sem-tab${activeSem === i ? " sem-tab--active" : ""}`}
                  onClick={() => setActiveSem(i)}
                >
                  Sem {i + 1}
                </button>
              ))}
            </div>

            <div className="sem-tabs__body">
              <table className="marks-entry-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Theory</th>
                    <th>Practical / Internal</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {semesters[activeSem].map((sub, subi) => {
                    const meta = findSubjectMeta(course, activeSem, sub.name);
                    const info = (sub.theory > 0 || sub.practical > 0)
                      ? getGradeInfo(sub.theory || 0, sub.practical || 0, meta.distribution)
                      : null;
                    const badgeType = info
                      ? info.gpa >= 3.7
                        ? "success"
                        : info.gpa >= 2.7
                          ? "info"
                          : info.gpa >= 2.0
                            ? "warning"
                            : "danger"
                      : "neutral";

                    return (
                      <tr key={subi}>
                        <td className="sub-name">{sub.name}</td>
                        <td>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <input
                              type="number"
                              className="marks-input"
                              min="0"
                              max={meta.distribution.theory}
                              value={sub.theory || ""}
                              onChange={(e) =>
                                updateMark(activeSem, subi, "theory", e.target.value)
                              }
                              placeholder="—"
                            />
                            <span style={{ fontSize: '10px', color: 'var(--text3)' }}>Max: {meta.distribution.theory}</span>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <input
                              type="number"
                              className="marks-input"
                              min="0"
                              max={meta.distribution.practical}
                              value={sub.practical || ""}
                              onChange={(e) =>
                                updateMark(activeSem, subi, "practical", e.target.value)
                              }
                              placeholder="—"
                            />
                            <span style={{ fontSize: '10px', color: 'var(--text3)' }}>Max: {meta.distribution.practical}</span>
                          </div>
                        </td>
                        <td>
                          {info ? (
                            <Badge type={badgeType}>{info.grade}</Badge>
                          ) : (
                            <span className="marks-na">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="modal__footer">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>
            {isEdit ? "Save Changes" : "Add Student"}
          </Button>
        </div>
      </div>
    </div>
  );
}
