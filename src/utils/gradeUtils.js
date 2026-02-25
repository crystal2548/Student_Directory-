import { GPA_SCALE } from "../constants/gpa.js";
import { SEMESTER_COUNT, SUBJECTS_BY_COURSE } from "../constants/courses.js";

/**
 * Calculates grade based on percentage and component-wise passing.
 * @param {number} theory - Obtained theory marks
 * @param {number} practical - Obtained practical marks
 * @param {object} dist - { theory: number, practical: number } max marks
 */
export function getGradeInfo(theory, practical, dist) {
  const tMax = dist?.theory ?? 80;
  const pMax = dist?.practical ?? 20;
  const totalMax = tMax + pMax;

  // TU Rule: Must secure 40% in each component
  const tMin = tMax * 0.4;
  const pMin = pMax * 0.4;

  if (theory < tMin || practical < pMin) {
    return GPA_SCALE.find(g => g.grade === "F") || GPA_SCALE[GPA_SCALE.length - 1];
  }

  const pct = ((theory + practical) / totalMax) * 100;
  return (
    GPA_SCALE.find((g) => pct >= g.min && pct <= g.max) ||
    GPA_SCALE[GPA_SCALE.length - 1]
  );
}

export function findSubjectMeta(course, si, subName) {
  const semSubjects = SUBJECTS_BY_COURSE[course]?.[si] || [];
  return semSubjects.find(s => s.name === subName) || { name: subName, hasLab: false, distribution: { theory: 80, practical: 20 } };
}

export function calcSemGPA(subjects, course, si) {
  if (!Array.isArray(subjects) || subjects.length === 0) return 0;

  // Filter and validate subjects
  const valid = subjects.filter((s) => s.theory > 0 || s.practical > 0);
  if (valid.length === 0) return 0;

  const totalGP = valid.reduce((sum, s) => {
    const meta = findSubjectMeta(course, si, s.name);
    const info = getGradeInfo(s.theory || 0, s.practical || 0, meta.distribution);
    return sum + info.gpa;
  }, 0);

  return +(totalGP / valid.length).toFixed(2);
}

export function calcOverallGPA(semesters, course) {
  if (!Array.isArray(semesters)) return 0;
  const semGPAs = semesters.map((subs, si) => calcSemGPA(subs, course, si)).filter((g) => g > 0);
  if (semGPAs.length === 0) return 0;
  return +(semGPAs.reduce((a, b) => a + b, 0) / semGPAs.length).toFixed(2);
}

export function getPerformanceLabel(gpa) {
  if (gpa >= 3.7) return "Distinction";
  if (gpa >= 3.0) return "First Division";
  if (gpa >= 2.7) return "Second Division";
  if (gpa >= 2.0) return "Pass";
  if (gpa > 0) return "Fail";
  return "N/A";
}

export function getPerformanceBadgeType(label) {
  switch (label) {
    case "Distinction": return "success";
    case "First Division": return "info";
    case "Second Division": return "warning";
    case "Pass": return "neutral";
    case "Fail": return "danger";
    default: return "neutral";
  }
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function makeEmptySemesters(course) {
  const n = SEMESTER_COUNT[course] ?? 8;
  return Array.from({ length: n }, (_, si) => {
    const semData = SUBJECTS_BY_COURSE[course]?.[si] ?? [];
    return semData.map((sub) => ({
      name: typeof sub === 'string' ? sub : sub.name,
      theory: 0,
      practical: 0
    }));
  });
}
