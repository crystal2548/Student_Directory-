import React from "react";
import Button from "../ui/Button.jsx";
import MarksPanel from "./MarksPanel.jsx";

export default function MarksModal({ student, onClose }) {
    if (!student) return null;

    return (
        <div
            className="modal-overlay"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="modal" style={{ maxWidth: '800px' }}>
                <div className="modal__header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="student-card__avatar" style={{ width: '32px', height: '32px', fontSize: '13px' }}>
                            {student.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>{student.name}</h2>
                            <p style={{ margin: 0, fontSize: '11px', color: 'var(--text3)' }}>
                                {student.rollNo} • {student.course}
                            </p>
                        </div>
                    </div>
                    <button className="modal__close" onClick={onClose} aria-label="Close">
                        &times;
                    </button>
                </div>

                <div className="modal__body" style={{ padding: 0 }}>
                    <div className="marks-container" style={{ padding: '20px' }}>
                        <MarksPanel student={student} />
                    </div>
                </div>

                <div className="modal__footer">
                    <Button variant="outline" onClick={onClose}>Close</Button>
                </div>
            </div>
        </div>
    );
}
