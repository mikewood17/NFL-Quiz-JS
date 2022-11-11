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
const answerOne = prompt("How many time did Dan marino lead the league in passing yards?(answer in number)");
if (answerOne.toUpperCase() === '5' ) {
  correct += 1;
}
const answerTwo = prompt("Who holds the NFL record of most sacks in a game with 7?");
if (answerTwo.toUpperCase() === 'DERRICK THOMAS' ) {
  correct += 1;
}
const answerThree = prompt("Who holds the NFL record for most rushing TD's in a half");
if (answerThree.toUpperCase() === 'SHAUN ALEXANDER' ) {
  correct += 1;
}
const answerFour = prompt("What QB has the most 300+ passing games of all time?");
if (answerFour.toUpperCase() === 'DREW BREES' ) {
  correct += 1;
}
const answerFive = prompt("What team has never beaten the Philadelphia Eagles?");
if (answerFive.toUpperCase() === 'JETS' ) {
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
  <ul>
    <li>5</li>
    <li>Derrick Thomas</li>
    <li>Shaun Alexander</li>
    <li>Drew Brees</li>
    <li>Jets</li>
  </ul>
`;




























