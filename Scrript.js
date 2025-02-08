let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
const compareGuesses = (human, computer, taget) => {
  //let target = generateTarget()
  //   console.log(generateTarget());
  let hdiff = human - target;
  let cdiff = computer - target;
  if (Math.abs(hdiff) < Math.abs(cdiff)) {
    return true;
  } else if (Math.abs(hdiff) > Math.abs(cdiff)) {
    return false;
  } else if (Math.abs(hdiff) === Math.abs(cdiff)) {
    return true;
  }
};
//check on abovecode for mistake
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore = humanScore + 1;
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
  }
};
const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
};
