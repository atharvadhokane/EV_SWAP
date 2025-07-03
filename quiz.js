const quizData = [
  {
    question: "What is the main advantage of battery swapping?",
    options: [
      "Longer charging times",
      "Near-instant turnaround",
      "Higher battery cost",
      "Less convenience"
    ],
    answer: 1
  },
  {
    question: "Which company is known for battery swap stations?",
    options: [
      "Nio",
      "Ford",
      "Toyota",
      "BMW"
    ],
    answer: 0
  },
  {
    question: "What does EV stand for?",
    options: [
      "Electric Vehicle",
      "Engine Vehicle",
      "Energy Van",
      "Eco Van"
    ],
    answer: 0
  },
  {
    question: "Which of the following is a benefit of battery swapping?",
    options: [
      "Increased downtime",
      "Reduced charging load on grid",
      "Higher emissions",
      "Longer battery replacement times"
    ],
    answer: 1
  },
  {
    question: "What is typically exchanged at a battery swap station?",
    options: [
      "The entire vehicle",
      "The car's tires",
      "A depleted battery for a charged one",
      "The car's engine"
    ],
    answer: 2
  }
];

let current = 0;
let score = 0;

function loadQuiz() {
  const q = quizData[current];
  document.getElementById('question').textContent = q.question;
  document.getElementById('options').innerHTML = q.options.map((opt, i) =>
    `<label class="block mb-2">
      <input type="radio" name="option" value="${i}" class="mr-2"> ${opt}
    </label>`
  ).join('');
  document.getElementById('feedback').textContent = '';
}

document.getElementById('submit').onclick = function () {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    document.getElementById('feedback').textContent = "Please select an answer.";
    return;
  }
  if (parseInt(selected.value) === quizData[current].answer) {
    score++;
    document.getElementById('feedback').textContent = "Correct!";
    document.getElementById('feedback').classList.add('text-green-600');
    document.getElementById('feedback').classList.remove('text-red-600');
  } else {
    document.getElementById('feedback').textContent = "Incorrect.";
    document.getElementById('feedback').classList.add('text-red-600');
    document.getElementById('feedback').classList.remove('text-green-600');
  }
  setTimeout(() => {
    current++;
    if (current < quizData.length) {
      loadQuiz();
    } else {
      document.getElementById('quiz-container').innerHTML =
        `<div class="text-xl font-bold text-center">Quiz Complete!<br>Your score: ${score}/${quizData.length}</div>`;
    }
  }, 1000);
};

window.addEventListener('DOMContentLoaded', loadQuiz);