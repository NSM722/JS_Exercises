/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples:
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
  let result;
  if( p1 === p2 || p2 === p1) {
      result = 'Draw!';
  } else if ((p2 === 'scissors' && p1 !== 'rock') || (p2 === 'rock' && p1 !== 'paper') || (p2 === 'paper' && p1 !== 'scissors') || (p2 === p1)) {
      result = 'Player 2 won!';
  } else {
      result = 'Player 1 won!';
  }
  return result;
};

console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'rock'));
console.log(rps('paper', 'rock'));