import { gpaScale, subjectsByCourse, semesterCount } from "../data/courseData";

// Find grade info for a given percentage
let getGradeInfo = (pct) => {
  // Pin to A if over 100% (legacy data)
  if (pct >= 100) return gpaScale[0];

  // Find grade info. Fixed gap by checking min <= pct < next_min
  let found = gpaScale.find((g) => pct >= g.min);
  return found || gpaScale[gpaScale.length - 1];
};

// Calculate GPA for one semester
let calcSemGPA = (subjects) => {
  if (!subjects || subjects.length === 0) return 0;

  // Include all subjects that are part of the syllabus
  let valid = subjects;
  if (!valid || valid.length === 0) return 0;

  let totalGPA = valid.reduce((sum, s) => {
    // Find the original subject data to get Full Marks (FM)
    // We look for the subject by name in subjectsByCourse (all semesters)
    // A better way would be to store FM in the student record, which we'll do in makeEmptySemesters
    let fullMarks = (s.theoryFM || 0) + (s.practicalFM || 0);
    if (fullMarks === 0) return sum; // Avoid division by zero

    let obtained = (s.theory || 0) + (s.practical || 0);
    let pct = (obtained / fullMarks) * 100;

    // TU Rule: Must get 40% in theory and 40% in practical separately if they exist
    let theoryPass = s.theoryFM > 0 ? (s.theory / s.theoryFM >= 0.4) : true;
    let practicalPass = s.practicalFM > 0 ? (s.practical / s.practicalFM >= 0.4) : true;

    if (!theoryPass || !practicalPass) {
      return sum + 0; // Fail the subject
    }

    return sum + getGradeInfo(pct).gpa;
  }, 0);

  return +(totalGPA / valid.length).toFixed(2);
};

// Generate a unique id for new students
let generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
};

// Build empty semester array for a given course
let makeEmptySemesters = (course) => {
  let n = semesterCount[course] || 8;
  return Array.from({ length: n }, (_, si) => {
    let subs = subjectsByCourse[course]?.[si] || [];
    return subs.map((s) => ({
      name: s.name,
      theory: 0,
      practical: 0,
      theoryFM: s.theoryFM,
      practicalFM: s.practicalFM
    }));
  });
};

// Merges existing student marks with current subject full marks (FM)
// This ensures old student records work with the new FM-based logic
let syncSemesters = (course, existingSemesters) => {
  if (!existingSemesters) return makeEmptySemesters(course);

  let standard = makeEmptySemesters(course);
  return standard.map((sem, si) => {
    return sem.map((sub, subi) => {
      // Try to find the matching subject in the existing record
      // We check by name since indices might change if the syllabus was updated
      let existing = existingSemesters[si]?.find((s) => s.name === sub.name);

      if (existing) {
        return {
          ...sub,
          theory: existing.theory || 0,
          practical: existing.practical || 0
        };
      }
      return sub;
    });
  });
};

export {
  getGradeInfo,
  calcSemGPA,
  syncSemesters,
  generateId,
  makeEmptySemesters,
};
