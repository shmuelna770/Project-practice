import readlineSync from 'readline-sync';
import Riddle from './classes/Riddle.js';
import Player from './classes/Player.js';
import r1 from './riddles/r1.js';
import r2 from './riddles/r2.js';
import r3 from './riddles/r3.js';
import r4 from './riddles/r4.js';
import r5 from './riddles/r5.js';

console.log("Welcome to the Riddle Game!");


const name = readlineSync.question("what is your name? ");
const player = new Player(name);

const riddles = [r1, r2, r3, r4, r5];

for (let riddleData of riddles) {
  const riddle = new Riddle(
    riddleData.id,
    riddleData.name,
    riddleData.taskDescription,
    riddleData.correctAnswer
  );

  const start = Date.now();
  riddle.ask();
  const end = Date.now();

  player.recordTime(start, end);
}

player.showStats();
