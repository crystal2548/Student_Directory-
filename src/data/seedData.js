export const SEED_DATA = [
  {
    id: "s1",
    name: "Aarav Sharma",
    rollNo: "076BSCCSIT001",
    course: "BSc CSIT",
    isPresent: true,
    semesters: [
      [
        { name: "Introduction to IT", theory: 50, practical: 32 }, // 82 total (A-)
        { name: "C Programming", theory: 48, practical: 35 }, // 83 total (A-)
        { name: "Digital Logic", theory: 55, practical: 38 }, // 93 total (A)
        { name: "Mathematics I", theory: 65, practical: 18 }, // 83 total (A-)
        { name: "Physics", theory: 45, practical: 30 }, // 75 total (B+)
      ],
      [
        { name: "Discrete Structure", theory: 70, practical: 18 },
        { name: "Object Oriented Programming", theory: 52, practical: 34 },
        { name: "Microprocessor", theory: 48, practical: 32 },
        { name: "Mathematics II", theory: 68, practical: 16 },
        { name: "Statistics I", theory: 54, practical: 32 },
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
        { name: "Computer Fundamentals & Applications", theory: 55, practical: 38 },
        { name: "Society and Technology", theory: 72, practical: 18 },
        { name: "English I", theory: 70, practical: 16 },
        { name: "Mathematics I", theory: 68, practical: 17 },
        { name: "Digital Logic", theory: 52, practical: 35 },
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
    semesters: [[], [], [], [], [], [], [], []],
  },
  {
    id: "s4",
    name: "Rohan KC",
    rollNo: "076BBS008",
    course: "BBS",
    isPresent: true,
    semesters: [
      [
        { name: "Business English", theory: 80, practical: 0 },
        { name: "Business Statistics", theory: 75, practical: 0 },
        { name: "Microeconomics for Business", theory: 88, practical: 0 },
        { name: "Accounting for Financial Analysis", theory: 82, practical: 0 },
        { name: "Principles of Management", theory: 78, practical: 0 },
      ],
      [], [], [],
    ],
  },
];
