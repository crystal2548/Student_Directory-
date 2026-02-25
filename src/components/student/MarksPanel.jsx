import Badge from "../ui/Badge.jsx";
import { calcSemGPA, getGradeInfo, findSubjectMeta } from "../../utils/gradeUtils.js";


export default function MarksPanel({ student }) {
  return (
    <div className="marks-panel">
      {student.semesters.map((subjects, si) => {
        const hasData = subjects.some((s) => s.theory > 0 || s.practical > 0);
        if (!hasData) return null;

        const semGPA = calcSemGPA(subjects, student.course, si);

        return (
          <div key={si} className="marks-sem">
            <div className="marks-sem__header">
              <span>Semester {si + 1}</span>
              <Badge type="info">GPA {semGPA.toFixed(2)}</Badge>
            </div>
            <table className="marks-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Theory</th>
                  <th>Practical / Internal</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub, j) => {
                  const meta = findSubjectMeta(student.course, si, sub.name);
                  const info = getGradeInfo(sub.theory || 0, sub.practical || 0, meta.distribution);
                  const badgeType =
                    info.gpa >= 3.7
                      ? "success"
                      : info.gpa >= 2.7
                        ? "info"
                        : info.gpa >= 2.0
                          ? "warning"
                          : "danger";

                  return (
                    <tr key={j}>
                      <td>{sub.name}</td>
                      <td>{sub.theory || "—"}</td>
                      <td>{sub.practical || "—"}</td>
                      <td>
                        <Badge type={badgeType}>{info.grade}</Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
