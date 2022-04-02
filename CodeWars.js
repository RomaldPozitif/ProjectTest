//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   => 100 points
//  One   5   => 50 point
const dice = [1, 1, 1, 3, 1, 7, 4, 3, 3];

function score(dice) {
  const threeScore = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600
  };

  const oneScore = {
    1: 100,
    5: 50
  };

  let totalScore = 0;
  const sortedDice = [...dice].sort((a, b) => a - b);

  for (let i = 0; i < sortedDice.length;) {
    const diceNumber = sortedDice[i];
    const lastIndex = sortedDice.lastIndexOf(diceNumber) + 1;
    let numberCount = lastIndex - i;
    console.log(`lastIndex - ${lastIndex}`);
    console.log(`numberCount - ${numberCount}`);
    while (threeScore[diceNumber] && numberCount >= 3) {
      totalScore += threeScore[diceNumber];
      numberCount -= 3;
    }

    while (oneScore[diceNumber] && numberCount > 0) {
      totalScore += oneScore[diceNumber];
      numberCount--;
    }

    i = lastIndex;
  }

  return totalScore;
}

score(dice);

console.log(score(dice));





