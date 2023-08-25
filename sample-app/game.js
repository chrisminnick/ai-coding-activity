// Path: sample-app/game.js
/* JavaScript for a US History trivia game. */

// Game class

class Game {
  constructor() {
    this.state = {
      currentQuestion: 0,
      currentScore: 0,
      questions: [],
    };

    this.start = this.start.bind(this);
    this.showQuestion = this.showQuestion.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
  }

  async loadQuestions() {
    // Fetch the questions from the API.
    console.log('Loading questions...');
    const response = await fetch('data.json');
    const data = await response.json();

    // Store the questions in the state.
    this.state.questions = data.questions;
    console.log(this.state.questions);
  }

  start() {
    // Display the first question.
    this.showQuestion();
  }

  showQuestion() {
    // Get the question text.
    var questionText =
      this.state.questions[this.state.currentQuestion].question;
    console.log(questionText);

    // Display the question text.
    document.getElementById('question-text').innerHTML = questionText;
  }
}

export default Game;
