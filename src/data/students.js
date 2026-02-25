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
        { name: "Introduction to IT", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "C Programming", theory: 75, practical: 35, theoryFM: 60, practicalFM: 40 },
        { name: "Digital Logic", theory: 55, practical: 38, theoryFM: 60, practicalFM: 40 },
        { name: "Mathematics I", theory: 58, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Physics", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 }
      ],
      [
        { name: "Discrete Structure", theory: 80, practical: 0, theoryFM: 80, practicalFM: 0 },
        { name: "Object Oriented Programming", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Microprocessor", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Mathematics II", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Statistics I", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 }
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
        { name: "Computer Fundamentals & Applications", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Society & Technology", theory: 100, practical: 0, theoryFM: 100, practicalFM: 0 },
        { name: "English I", theory: 100, practical: 0, theoryFM: 100, practicalFM: 0 },
        { name: "Mathematics I", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Digital Logic", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 }
      ],
      [], [], [], [], [], [], [],
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
        { name: "Introduction to IT", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "C Programming", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Digital Logic", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Mathematics I", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Physics", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 }
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
        { name: "Business English", theory: 85, practical: 0, theoryFM: 100, practicalFM: 0 },
        { name: "Business Statistics", theory: 55, practical: 35, theoryFM: 60, practicalFM: 40 },
        { name: "Microeconomics for Business", theory: 72, practical: 0, theoryFM: 100, practicalFM: 0 },
        { name: "Principles of Management", theory: 70, practical: 0, theoryFM: 100, practicalFM: 0 },
        { name: "Financial Accounting and Analysis", theory: 82, practical: 0, theoryFM: 100, practicalFM: 0 }
      ],
      [], [], [],
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
        { name: "Computer Fundamentals & Applications", theory: 45, practical: 32, theoryFM: 60, practicalFM: 40 },
        { name: "Society & Technology", theory: 72, practical: 0, theoryFM: 100, practicalFM: 0 },
        { name: "English I", theory: 68, practical: 0, theoryFM: 100, practicalFM: 0 },
        { name: "Mathematics I", theory: 42, practical: 28, theoryFM: 60, practicalFM: 40 },
        { name: "Digital Logic", theory: 48, practical: 30, theoryFM: 60, practicalFM: 40 }
      ],
      [], [], [], [], [], [], [],
    ],
  },
  {
    id: "s6",
    name: "Samit Shrestha",
    rollNo: "078BSCCSIT021",
    course: "BSc CSIT",
    isPresent: true,
    semesters: [
      [
        { name: "Introduction to IT", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "C Programming", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Digital Logic", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Mathematics I", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Physics", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 }
      ],
      [
        { name: "Discrete Structure", theory: 80, practical: 0, theoryFM: 80, practicalFM: 0 },
        { name: "Object Oriented Programming", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Microprocessor", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Mathematics II", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 },
        { name: "Statistics I", theory: 60, practical: 40, theoryFM: 60, practicalFM: 40 }
      ],
      [], [], [], [], [], [],
    ],
  },
];

export default students;
