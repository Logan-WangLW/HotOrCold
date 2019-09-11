export const getFeedback = (userGuess, answer) => {
  const guessToAnswer = Math.abs(userGuess - answer);
  let feedback;
  if (guessToAnswer === 0) {
    feedback = 'YES! you got it!';
  } else if (guessToAnswer <= 5) {
    feedback = 'HOT 🔥';
  } else if (guessToAnswer <= 15) {
    feedback = 'Warm';
  } else if (guessToAnswer <= 30) {
    feedback = 'Cold';
  } else {
    feedback = 'You\'re Ice Cold... 🥶';
  }
  return feedback;
}