/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const answerOne = prompt("What city did the Commanders play in before moving to Washington?");
if (answerOne.toUpperCase() === 'BOSTON' ) {
  correct += 1;
}
const answerTwo = prompt("What team won the first ever Super Bowl?");
if (answerTwo.toUpperCase() === 'GREEN BAY' ) {
  correct += 1;
}
const answerThree = prompt("Name one State that has three NFL teams?");
if (answerThree.toUpperCase() === 'FLORIDA' || 'CALIFORNIA' ) {
  correct += 1;
}
const answerFour = prompt("What team brought an end to the Miami dolphiins perfect season?");
if (answerFour.toUpperCase() === 'COWBOYS' ) {
  correct += 1;
}
const answerFive = prompt("What team has played the Super Bowl in thier home stadium?");
if (answerFive.toUpperCase() === 'TAMPA BAY' || 'BUCCANEERS' ) {
  correct += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( correct === 5 ) {
  rank = "Gold";
} else if ( correct >= 3 ) {
  rank = "Silver"; 
} else if ( correct >= 2 ) {
  rank = "Bronze";
} else {
  rank = "Trash";
}


// 6. Output results to the <main> element

main.innerHTML = `
  <h2> You got ${correct} out of 5 questions Correct.</h2>
  <p> Rank earned: <strong>${rank}</strong></p>
`;




























