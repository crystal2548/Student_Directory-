export const COURSES = ["BSc CSIT", "BCA", "BBS", "BBA"];

export const SUBJECTS_BY_COURSE = {
  "BSc CSIT": [
    // Sem 1
    [
      { name: "Introduction to IT", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "C Programming", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Digital Logic", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Mathematics I", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Physics", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
    // Sem 2
    [
      { name: "Discrete Structure", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Object Oriented Programming", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Microprocessor", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Mathematics II", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Statistics I", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
    // Sem 3
    [
      { name: "Data Structures and Algorithms", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Numerical Method", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Computer Architecture", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Computer Graphics", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Statistics II", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
    // Sem 4
    [
      { name: "Theory of Computation", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Computer Networks", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Operating Systems", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Database Management System", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Artificial Intelligence", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
    // Sem 5 (Approximation of common dist)
    [
      { name: "Analysis and Design of Algorithm", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "System Analysis and Design", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Cryptography", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Simulation and Modeling", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Web Technology", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Elective I", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
    // Sem 6
    [
      { name: "Software Engineering", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Compiler Design and Construction", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "E-Governance", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: ".NET Centric Computing", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Technical Writing", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Elective II", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
    // Sem 7
    [
      { name: "Advanced Java Programming", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Data Warehousing and Data Mining", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Principles of Management", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Project Work", hasLab: true, distribution: { theory: 0, practical: 100 } },
      { name: "Elective III", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Elective IV", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
    // Sem 8
    [
      { name: "Advanced Database", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Internship", hasLab: true, distribution: { theory: 0, practical: 100 } },
      { name: "Project Work", hasLab: true, distribution: { theory: 0, practical: 100 } },
      { name: "Elective V", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
  ],
  "BCA": [
    // Sem 1
    [
      { name: "Computer Fundamentals & Applications", hasLab: true, distribution: { theory: 60, practical: 40 } },
      { name: "Society and Technology", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "English I", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Mathematics I", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Digital Logic", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ],
    // ... Simplified common distribution for other BCA
    ...Array(7).fill([
      { name: "Subject (Theory 80/20)", hasLab: false, distribution: { theory: 80, practical: 20 } },
      { name: "Subject (Lab 60/40)", hasLab: true, distribution: { theory: 60, practical: 40 } },
    ])
  ],
  "BBS": [
    // BBS is mostly 100 (Internal + Final)
    ...Array(4).fill([
      { name: "BBS Subject", hasLab: false, distribution: { theory: 100, practical: 0 } },
    ])
  ],
  "BBA": [
    // BBA 60/40
    ...Array(8).fill([
      { name: "BBA Subject", hasLab: false, distribution: { theory: 60, practical: 40 } },
    ])
  ]
};

export const SEMESTER_COUNT = {
  "BSc CSIT": 8,
  "BCA": 8,
  "BBS": 4,
  "BBA": 8,
};
