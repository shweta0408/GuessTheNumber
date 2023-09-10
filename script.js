'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.guess').value = 20
// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    //  document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
  }

  //when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //  guess > secretNumber ? 'Too high' : 'Too Low';
        displayMessage(guess > secretNumber ? 'Too high' : 'Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You Lost Game');
      }
    }
    //when wrong input high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost Game';
    //   }

    //   //when wrong input low
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'Too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start Guessing....');
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
