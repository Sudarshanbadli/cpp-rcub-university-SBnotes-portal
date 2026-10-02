
/*
  SB NOTES - STUDY MATERIAL DATABASE

  To add a PDF:
  1. Upload your PDF into the pdfs/ folder.
  2. Replace the url with its relative path.
  3. Add another object for a new document.

  Example:
  url: "pdfs/unit-1-complete-notes.pdf"
*/

const NOTES = [

  {
    id: 1,
    unit: "Unit I",
    title: "Introduction to C++",
    subtitle: "Fundamentals and Programming Basics",
    description:
      "Learn the foundations of C++, program structure, tokens, data types, operators and basic input/output operations.",
    topics: [
      "Introduction to C++",
      "Structure of C++ Program",
      "Tokens and Keywords",
      "Data Types",
      "Variables and Constants",
      "Operators",
      "Input and Output"
    ],
    fileName: "unit-1-cpp-notes.pdf",
    pages: "Add pages",
    level: "Beginner",
    url: "https://github.com/Sudarshanbadli/cpp-rcub-university-SBnotes-portal/blob/main/unit1.pdf",
    color: "blue"
  },

  {
    id: 2,
    unit: "Unit II",
    title: "Control Statements",
    subtitle: "Decision Making and Looping",
    description:
      "Understand conditional statements, branching, loops, break, continue and program control mechanisms.",
    topics: [
      "if Statement",
      "if-else",
      "Nested if",
      "switch",
      "for Loop",
      "while Loop",
      "do-while Loop",
      "break and continue"
    ],
    fileName: "unit-2-control-statements.pdf",
    pages: "Add pages",
    level: "Intermediate",
    url: "https://github.com/Sudarshanbadli/cpp-rcub-university-SBnotes-portal/blob/main/unit2.pdf",
    color: "purple"
  },

  {
    id: 3,
    unit: "Unit III",
    title: "Functions and Arrays",
    subtitle: "Modular Programming",
    description:
      "Study functions, function arguments, recursion, arrays, strings and their implementation in C++.",
    topics: [
      "Functions",
      "Function Declaration",
      "Function Definition",
      "Function Overloading",
      "Recursion",
      "One-Dimensional Arrays",
      "Two-Dimensional Arrays",
      "Strings"
    ],
    fileName: "unit-3-functions-arrays.pdf",
    pages: "Add pages",
    level: "Intermediate",
    url: "https://github.com/Sudarshanbadli/cpp-rcub-university-SBnotes-portal/blob/main/unit3.pdf",
    color: "orange"
  },

  {
    id: 4,
    unit: "Unit IV",
    title: "Object Oriented Programming",
    subtitle: "Classes and Objects",
    description:
      "Explore the principles of object-oriented programming, classes, objects, constructors, inheritance and polymorphism.",
    topics: [
      "OOP Concepts",
      "Classes and Objects",
      "Access Specifiers",
      "Constructors",
      "Destructors",
      "Inheritance",
      "Polymorphism",
      "Encapsulation"
    ],
    fileName: "unit-4-oop-concepts.pdf",
    pages: "Add pages",
    level: "Advanced",
    url: "https://github.com/Sudarshanbadli/cpp-rcub-university-SBnotes-portal/blob/main/unit4.pdf",
    color: "green"
  },

  {
    id: 5,
    unit: "Unit V",
    title: "Advanced C++ Concepts",
    subtitle: "Files, Templates and Exception Handling",
    description:
      "Learn advanced C++ programming concepts, including file handling, templates and exception handling.",
    topics: [
      "Pointers",
      "Dynamic Memory",
      "File Handling",
      "Templates",
      "Exception Handling",
      "Standard Template Library"
    ],
    fileName: "unit-5-advanced-cpp.pdf",
    pages: "Add pages",
    level: "Advanced",
    url: "https://github.com/Sudarshanbadli/cpp-rcub-university-SBnotes-portal/blob/main/unit5.pdf",
    color: "pink"
  }

];
