// Sample student data loaded on first run
// Each student matches the shape used throughout the app

let students = [
  {
    id: "s1",
    name: "Aarav Sharma",
    rollNo: "076BSCCSIT001",
    course: "BSc CSIT",
    isPresent: true,
    semesters: [
      [
        { name: "C Programming",  theory: 85, practical: 80 },
        { name: "Digital Logic",  theory: 78, practical: 0  },
        { name: "Mathematics I",  theory: 90, practical: 0  },
        { name: "Physics",        theory: 72, practical: 65 },
        { name: "English",        theory: 88, practical: 0  },
      ],
      [
        { name: "Data Structures", theory: 92, practical: 88 },
        { name: "OOP with Java",   theory: 87, practical: 85 },
        { name: "Mathematics II",  theory: 83, practical: 0  },
        { name: "Microprocessor",  theory: 76, practical: 70 },
        { name: "Probability",     theory: 89, practical: 0  },
      ],
      [], [], [], [], [], [],
    ],
  },
  {
    id: "s2",
    name: "Priya Thapa",
    rollNo: "076BCA020",
    course: "BCA",
    isPresent: true,
    semesters: [
      [
        { name: "C Programming",  theory: 95, practical: 92 },
        { name: "Mathematics I",  theory: 91, practical: 0  },
        { name: "English",        theory: 88, practical: 0  },
        { name: "Account Basics", theory: 86, practical: 0  },
        { name: "Digital Logic",  theory: 93, practical: 88 },
      ],
      [
        { name: "Data Structures", theory: 90, practical: 87 },
        { name: "OOP",             theory: 94, practical: 91 },
        { name: "Mathematics II",  theory: 89, practical: 0  },
        { name: "Web Tech",        theory: 96, practical: 94 },
        { name: "Network Basics",  theory: 85, practical: 0  },
      ],
      [], [], [], [],
    ],
  },
  {
    id: "s3",
    name: "Sunita Rai",
    rollNo: "078BSCCSIT042",
    course: "BSc CSIT",
    isPresent: false,
    semesters: [
      [
        { name: "C Programming", theory: 55, practical: 50 },
        { name: "Digital Logic", theory: 48, practical: 0  },
        { name: "Mathematics I", theory: 60, practical: 0  },
        { name: "Physics",       theory: 52, practical: 45 },
        { name: "English",       theory: 70, practical: 0  },
      ],
      [], [], [], [], [], [], [],
    ],
  },
  {
    id: "s4",
    name: "Rohan KC",
    rollNo: "076BBS008",
    course: "BBS",
    isPresent: true,
    semesters: [
      [
        { name: "English",       theory: 80, practical: 0 },
        { name: "Nepali",        theory: 75, practical: 0 },
        { name: "Accounting",    theory: 88, practical: 0 },
        { name: "Economics",     theory: 82, practical: 0 },
        { name: "Business Math", theory: 78, practical: 0 },
      ],
      [
        { name: "Business Law", theory: 85, practical: 0 },
        { name: "Finance",      theory: 90, practical: 0 },
        { name: "Marketing",    theory: 83, practical: 0 },
        { name: "Statistics",   theory: 79, practical: 0 },
        { name: "HRM",          theory: 87, practical: 0 },
      ],
      [], [],
    ],
  },
  {
    id: "s5",
    name: "Bikash Gurung",
    rollNo: "077BCA015",
    course: "BCA",
    isPresent: true,
    semesters: [
      [
        { name: "C Programming",  theory: 65, practical: 60 },
        { name: "Mathematics I",  theory: 58, practical: 0  },
        { name: "English",        theory: 72, practical: 0  },
        { name: "Account Basics", theory: 60, practical: 0  },
        { name: "Digital Logic",  theory: 68, practical: 55 },
      ],
      [], [], [], [], [],
    ],
  },
];

export default students;
