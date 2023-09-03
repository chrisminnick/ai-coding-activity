const questionElement = document.getElementById('question');
const answerElements = Array.from(document.querySelectorAll('.answer-btn'));
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

// Sample array of questions and answers
const questionsAndAnswers = [
  {
    question: 'Which year did the United States declare its independence?',
    answers: ['1776', '1789', '1800', '1812'],
    correctAnswer: '1776',
  },
  {
    question: "Which U.S. president was known as the 'Great Emancipator'?",
    answers: [
      'Abraham Lincoln',
      'Thomas Jefferson',
      'George Washington',
      'Andrew Jackson',
    ],
    correctAnswer: 'Abraham Lincoln',
  },
  {
    question:
      'What was the name of the ship that brought the Pilgrims to America in 1620?',
    answers: ['Mayflower', 'Santa Maria', 'Nina', 'Discovery'],
    correctAnswer: 'Mayflower',
  },
  {
    question:
      "Which landmark was completed in 1889 for the 100th anniversary of George Washington's inauguration as the first U.S. president?",
    answers: [
      'Washington Monument',
      'Statue of Liberty',
      'Golden Gate Bridge',
      'Mount Rushmore',
    ],
    correctAnswer: 'Washington Monument',
  },
  {
    question: 'Which U.S. state was the first to be admitted to the Union?',
    answers: ['Delaware', 'Massachusetts', 'Virginia', 'New York'],
    correctAnswer: 'Delaware',
  },
  {
    question: 'During which war was the Battle of Gettysburg fought?',
    answers: ['Civil War', 'Revolutionary War', 'World War I', 'Vietnam War'],
    correctAnswer: 'Civil War',
  },
  {
    question: 'Who was the first woman to fly solo across the Atlantic Ocean?',
    answers: [
      'Amelia Earhart',
      'Bessie Coleman',
      'Harriet Quimby',
      'Katherine Wright',
    ],
    correctAnswer: 'Amelia Earhart',
  },
  {
    question:
      'Which document established the framework of the U.S. government and remains the supreme law of the land?',
    answers: [
      'Constitution',
      'Declaration of Independence',
      'Bill of Rights',
      'Articles of Confederation',
    ],
    correctAnswer: 'Constitution',
  },
  {
    question:
      'What was the name of the ship that carried the first English settlers to Jamestown, Virginia, in 1607?',
    answers: ['Susan Constant', 'Endeavour', 'Discovery', 'Golden Hind'],
    correctAnswer: 'Susan Constant',
  },
  {
    question:
      'Which U.S. president is associated with the construction of the Panama Canal?',
    answers: [
      'Theodore Roosevelt',
      'Woodrow Wilson',
      'Franklin D. Roosevelt',
      'Harry S. Truman',
    ],
    correctAnswer: 'Theodore Roosevelt',
  },
  {
    question: 'In which year did the United States enter World War II?',
    answers: ['1941', '1939', '1945', '1942'],
    correctAnswer: '1941',
  },
  // Add more questions here
];

// Shuffle function to randomize answer order
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Function to load a new question
function loadQuestion() {
  const question = questionsAndAnswers[currentQuestionIndex];
  questionElement.textContent = question.question;
  const shuffledAnswers = shuffle([...question.answers]);

  answerElements.forEach((btn, index) => {
    btn.textContent = shuffledAnswers[index];
    btn.addEventListener('click', () =>
      checkAnswer(shuffledAnswers[index], question.correctAnswer)
    );
  });
}

// Function to check the user's answer
function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
    scoreElement.textContent = score;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsAndAnswers.length) {
    loadQuestion();
  } else {
    questionElement.textContent = 'Trivia game completed!';
    answerElements.forEach((btn) => (btn.style.display = 'none'));
  }
}

loadQuestion();
