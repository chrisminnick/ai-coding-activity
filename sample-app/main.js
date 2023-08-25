/* JavaScript for a US History trivia game. */

// import the Game class
import Game from './game.js';
// Create a new game object.
const game = new Game();

await game.loadQuestions();

// Start the game.
game.start();
