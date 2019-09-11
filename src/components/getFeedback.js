export const getFeedback = (userGuess, answer) => {
  const guessToAnswer = Math.abs(userGuess - answer);
  let feedback;
  if (guessToAnswer === 0) {
    feedback = 'YES! you got it!';
  } else if (guessToAnswer <= 10) {
    feedback = 'HOT';
  } else if (guessToAnswer <= 20) {
    feedback = 'warm';
  } else {
    feedback = 'cold';
  }
  return feedback;
}