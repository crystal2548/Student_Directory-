// Available courses
let courses = ["BSc CSIT", "BCA", "BBS"];

// Subjects for each course, per semester/year
// Each subject: { name: string, theoryFM: number, practicalFM: number }
let subjectsByCourse = {
  "BSc CSIT": [
    // 1st Sem
    [
      { name: "Introduction to IT", theoryFM: 60, practicalFM: 40 },
      { name: "C Programming", theoryFM: 60, practicalFM: 40 },
      { name: "Digital Logic", theoryFM: 60, practicalFM: 40 },
      { name: "Mathematics I", theoryFM: 60, practicalFM: 40 },
      { name: "Physics", theoryFM: 60, practicalFM: 40 }
    ],
    // 2nd Sem
    [
      { name: "Discrete Structure", theoryFM: 80, practicalFM: 0 },
      { name: "Object Oriented Programming", theoryFM: 60, practicalFM: 40 },
      { name: "Microprocessor", theoryFM: 60, practicalFM: 40 },
      { name: "Mathematics II", theoryFM: 60, practicalFM: 40 },
      { name: "Statistics I", theoryFM: 60, practicalFM: 40 }
    ],
    // 3rd Sem
    [
      { name: "Data Structures and Algorithms", theoryFM: 60, practicalFM: 40 },
      { name: "Numerical Method", theoryFM: 60, practicalFM: 40 },
      { name: "Computer Architecture", theoryFM: 60, practicalFM: 40 },
      { name: "Computer Graphics", theoryFM: 60, practicalFM: 40 },
      { name: "Statistics II", theoryFM: 60, practicalFM: 40 }
    ],
    // 4th Sem
    [
      { name: "Theory of Computation", theoryFM: 80, practicalFM: 0 },
      { name: "Computer Networks", theoryFM: 60, practicalFM: 40 },
      { name: "Operating Systems", theoryFM: 60, practicalFM: 40 },
      { name: "Database Management System", theoryFM: 60, practicalFM: 40 },
      { name: "Artificial Intelligence", theoryFM: 60, practicalFM: 40 }
    ],
    // 5th Sem
    [
      { name: "Design and Analysis of Algorithms", theoryFM: 60, practicalFM: 40 },
      { name: "System Analysis and Design", theoryFM: 80, practicalFM: 0 },
      { name: "Cryptography", theoryFM: 60, practicalFM: 40 },
      { name: "Simulation and Modeling", theoryFM: 60, practicalFM: 40 },
      { name: "Web Technology", theoryFM: 60, practicalFM: 40 },
      { name: "Elective I", theoryFM: 60, practicalFM: 40 }
    ],
    // 6th Sem
    [
      { name: "Software Engineering", theoryFM: 60, practicalFM: 40 },
      { name: "Compiler Design", theoryFM: 60, practicalFM: 40 },
      { name: "Web-Centric Computing", theoryFM: 60, practicalFM: 40 },
      { name: "Technical Writing", theoryFM: 80, practicalFM: 0 },
      { name: "E-Governance", theoryFM: 60, practicalFM: 40 },
      { name: "Elective II", theoryFM: 60, practicalFM: 40 }
    ],
    // 7th Sem
    [
      { name: "Advanced Java Programming", theoryFM: 60, practicalFM: 40 },
      { name: "Data Warehousing and Data Mining", theoryFM: 60, practicalFM: 40 },
      { name: "Principles of Management", theoryFM: 80, practicalFM: 0 },
      { name: "Project Work", theoryFM: 0, practicalFM: 100 },
      { name: "Elective III", theoryFM: 60, practicalFM: 40 }
    ],
    // 8th Sem
    [
      { name: "Advanced Database", theoryFM: 60, practicalFM: 40 },
      { name: "Internship", theoryFM: 0, practicalFM: 100 },
      { name: "Elective IV", theoryFM: 60, practicalFM: 40 },
      { name: "Elective V", theoryFM: 60, practicalFM: 40 }
    ]
  ],
  "BCA": [
    // 1st Sem
    [
      { name: "Computer Fundamentals & Applications", theoryFM: 60, practicalFM: 40 },
      { name: "Society & Technology", theoryFM: 100, practicalFM: 0 },
      { name: "English I", theoryFM: 100, practicalFM: 0 },
      { name: "Mathematics I", theoryFM: 60, practicalFM: 40 },
      { name: "Digital Logic", theoryFM: 60, practicalFM: 40 }
    ],
    // 2nd Sem
    [
      { name: "C Programming", theoryFM: 60, practicalFM: 40 },
      { name: "Financial Accounting", theoryFM: 100, practicalFM: 0 },
      { name: "English II", theoryFM: 100, practicalFM: 0 },
      { name: "Mathematics II", theoryFM: 60, practicalFM: 40 },
      { name: "Microprocessor and Computer Architecture", theoryFM: 60, practicalFM: 40 }
    ],
    // 3rd Sem
    [
      { name: "Data Structures & Algorithms", theoryFM: 60, practicalFM: 40 },
      { name: "Probability and Statistics", theoryFM: 60, practicalFM: 40 },
      { name: "System Analysis and Design", theoryFM: 100, practicalFM: 0 },
      { name: "OOP in Java", theoryFM: 60, practicalFM: 40 },
      { name: "Web Technology I", theoryFM: 60, practicalFM: 40 }
    ],
    // 4th Sem
    [
      { name: "Operating System", theoryFM: 60, practicalFM: 40 },
      { name: "Numerical Methods", theoryFM: 60, practicalFM: 40 },
      { name: "Software Engineering", theoryFM: 100, practicalFM: 0 },
      { name: "Scripting Language", theoryFM: 60, practicalFM: 40 },
      { name: "Database Management System", theoryFM: 60, practicalFM: 40 },
      { name: "Project I", theoryFM: 0, practicalFM: 100 }
    ],
    // 5th Sem
    [
      { name: "MIS and e-Business", theoryFM: 100, practicalFM: 0 },
      { name: "DotNet Technology", theoryFM: 60, practicalFM: 40 },
      { name: "Computer Networking", theoryFM: 60, practicalFM: 40 },
      { name: "Introduction to Management", theoryFM: 100, practicalFM: 0 },
      { name: "Elective I", theoryFM: 100, practicalFM: 0 }
    ],
    // 6th Sem
    [
      { name: "Mobile Programming", theoryFM: 60, practicalFM: 40 },
      { name: "Distributed System", theoryFM: 60, practicalFM: 40 },
      { name: "Applied Economics", theoryFM: 100, practicalFM: 0 },
      { name: "Advanced Java Programming", theoryFM: 60, practicalFM: 40 },
      { name: "Project II", theoryFM: 0, practicalFM: 100 },
      { name: "Elective II", theoryFM: 100, practicalFM: 0 }
    ],
    // 7th Sem
    [
      { name: "Cyber Law & Professional Ethics", theoryFM: 100, practicalFM: 0 },
      { name: "Cloud Computing", theoryFM: 60, practicalFM: 40 },
      { name: "Internship", theoryFM: 0, practicalFM: 100 },
      { name: "Elective III", theoryFM: 100, practicalFM: 0 }
    ],
    // 8th Sem
    [
      { name: "Operations Research", theoryFM: 100, practicalFM: 0 },
      { name: "Project III", theoryFM: 0, practicalFM: 100 },
      { name: "Elective IV", theoryFM: 100, practicalFM: 0 }
    ]
  ],
  "BBS": [
    // Year 1
    [
      { name: "Business English", theoryFM: 100, practicalFM: 0 },
      { name: "Business Statistics", theoryFM: 60, practicalFM: 40 },
      { name: "Microeconomics for Business", theoryFM: 100, practicalFM: 0 },
      { name: "Principles of Management", theoryFM: 100, practicalFM: 0 },
      { name: "Financial Accounting and Analysis", theoryFM: 100, practicalFM: 0 }
    ],
    // Year 2
    [
      { name: "Business Communication", theoryFM: 100, practicalFM: 0 },
      { name: "Macroeconomics for Business", theoryFM: 100, practicalFM: 0 },
      { name: "Cost and Management Accounting", theoryFM: 100, practicalFM: 0 },
      { name: "Fundamentals of Marketing", theoryFM: 100, practicalFM: 0 },
      { name: "Foundations of Human Resource Management", theoryFM: 100, practicalFM: 0 }
    ],
    // Year 3
    [
      { name: "Business Law", theoryFM: 100, practicalFM: 0 },
      { name: "Fundamentals of Financial Management", theoryFM: 100, practicalFM: 0 },
      { name: "Business Environment and Strategy", theoryFM: 100, practicalFM: 0 },
      { name: "Taxation and Auditing", theoryFM: 100, practicalFM: 0 },
      { name: "Organizational Behavior", theoryFM: 100, practicalFM: 0 }
    ],
    // Year 4
    [
      { name: "Entrepreneurship and Enterprise Development", theoryFM: 100, practicalFM: 0 },
      { name: "Business Research Methods", theoryFM: 50, practicalFM: 0 },
      { name: "Concentration I", theoryFM: 100, practicalFM: 0 },
      { name: "Concentration II", theoryFM: 100, practicalFM: 0 },
      { name: "Concentration III", theoryFM: 100, practicalFM: 0 },
      { name: "Final Project", theoryFM: 0, practicalFM: 50 }
    ]
  ],
};

// How many semesters each course has
let semesterCount = {
  "BSc CSIT": 8,
  "BCA": 8,
  "BBS": 4, // 4 Years
};

// GPA conversion table (TU Grading System)
let gpaScale = [
  { min: 90, max: 100, grade: "A", gpa: 4.0, label: "Distinction" },
  { min: 80, max: 89.99, grade: "A-", gpa: 3.7, label: "Distinction" },
  { min: 70, max: 79.99, grade: "B+", gpa: 3.3, label: "First Division" },
  { min: 60, max: 69.99, grade: "B", gpa: 3.0, label: "First Division" },
  { min: 50, max: 59.99, grade: "B-", gpa: 2.7, label: "Second Division" },
  { min: 40, max: 49.99, grade: "C+", gpa: 2.3, label: "Second Division" },
  { min: 35, max: 39.99, grade: "C", gpa: 2.0, label: "Pass" },
  { min: 0, max: 34.99, grade: "F", gpa: 0.0, label: "Fail" },
];

export { courses, subjectsByCourse, semesterCount, gpaScale };
