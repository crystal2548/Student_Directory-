import Badge from "./Badge";
import { calcSemGPA, getGradeInfo, syncSemesters } from "../data/gradeHelpers";
import "./MarksPanel.css";

let MarksPanel = ({ student, onClose }) => {
  if (!student) return null;

  // Sync semesters to ensure we have FM data for all subjects (handles older records)
  let syncedSemesters = syncSemesters(student.course, student.semesters);

  // Close if user clicks the dark overlay behind the modal
  let handleOverlayClick = (ev) => {
    if (ev.target === ev.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal marks-modal">
        <div className="modal-header">
          <h2>Marks Record: {student.name}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          <div className="marks-panel">
            {syncedSemesters.map((subjects, si) => {
              // Conditional rendering — only show semesters that have data entered
              let hasData = subjects.some((s) => s.theory > 0 || s.practical > 0);
              if (!hasData) return null;

              let semGPA = calcSemGPA(subjects);

              return (
                <div key={si} className="marks-sem">
                  <div className="marks-sem-header">
                    <span>{si + 1}{si < 4 && student.course === "BBS" ? " Year" : " Semester"}</span>
                    <Badge type="info">GPA {semGPA}</Badge>
                  </div>

                  <table className="marks-table">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Theory</th>
                        <th>Practical</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map((sub, j) => {
                        let fullTotal = (sub.theoryFM || 0) + (sub.practicalFM || 0);
                        let obtained = (sub.theory || 0) + (sub.practical || 0);
                        let pct = fullTotal > 0 ? (obtained / fullTotal) * 100 : 0;

                        // TU Passing Logic: 40% in each component
                        let theoryPass = sub.theoryFM > 0 ? (sub.theory / sub.theoryFM >= 0.4) : true;
                        let practicalPass = sub.practicalFM > 0 ? (sub.practical / sub.practicalFM >= 0.4) : true;

                        let info = (theoryPass && practicalPass) ? getGradeInfo(pct) : { grade: "F", gpa: 0 };

                        // Conditional badge colour
                        let badgeType = info.gpa >= 3.7 ? "success"
                          : info.gpa >= 2.7 ? "info"
                            : info.gpa >= 2.0 ? "warning"
                              : "danger";

                        return (
                          <tr key={`${si}-${j}`}>
                            <td>{sub.name}</td>
                            <td>
                              {sub.theoryFM > 0 ? `${sub.theory}/${sub.theoryFM}` : "—"}
                            </td>
                            <td>
                              {sub.practicalFM > 0 ? `${sub.practical}/${sub.practicalFM}` : "—"}
                            </td>
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
        </div>
      </div>
    </div>
  );
};

export default MarksPanel;
