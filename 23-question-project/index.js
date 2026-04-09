const developerQuiz = [
  {
    id: 1,
    question: "Which method is used to select element by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElementsByClass()",
      "selectById()",
    ],
    answer: "getElementById()",
  },
  {
    id: 2,
    question: "Which keyword declares a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    answer: "const",
  },
  {
    id: 3,
    question: "Which CSS property is used for Flexbox?",
    options: [
      "display: block",
      "display: flex",
      "display: inline",
      "display: grid",
    ],
    answer: "display: flex",
  },
  {
    id: 4,
    question: "Which hook is used for state in React?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    id: 5,
    question: "Which method converts string to array?",
    options: ["split()", "join()", "slice()", "splice()"],
    answer: "split()",
  },
  {
    id: 6,
    question: "Which HTML tag is used for JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>",
  },
  {
    id: 7,
    question: "Which array method returns new array?",
    options: ["forEach()", "map()", "print()", "loop()"],
    answer: "map()",
  },
  {
    id: 8,
    question: "Which operator is strict equality?",
    options: ["==", "=", "===", "!="],
    answer: "===",
  },
  {
    id: 9,
    question: "Which company developed JavaScript?",
    options: ["Google", "Netscape", "Microsoft", "Apple"],
    answer: "Netscape",
  },
  {
    id: 10,
    question: "Which method adds element at end of array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
];

let qnsNumber = document.getElementById("qnsNumber");

let qnsTimer = document.getElementById("qnsTimer");

let qns = document.getElementById("qns");

let options = document.getElementById("options");

let nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function loadQns() {
  let currentqns = developerQuiz[currentIndex];

  qns.innerText = currentqns.question;

  options.innerHTML = "";

  currentqns.options.forEach((opt) => {
    let col = document.createElement("div");

    col.classList.add("col-md-6");

    let button = document.createElement("button");

    button.innerText = opt;

    button.classList.add("btn",  "option-btn");

    options.appendChild(col);

    col.appendChild(button);
  });
}

loadQns();

let qunsCounter = 0;

function nextbutton() {
  if (developerQuiz.length > currentIndex) {
    currentIndex++;
    qunsCounter++;
  }

  qnsNumber.innerHTML = `Qns ${qunsCounter}/10`;

  loadQns();
}

nextbutton();
