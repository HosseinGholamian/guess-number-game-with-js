'use strict';
let answer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighscore = 0;


document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = 'Guess a number!!!';
    } else if (guess == answer) {
        document.querySelector(".message").textContent = 'Well Done';
        document.querySelector(".number").textContent = answer;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = "30rem"
        if (score > heighscore) {
            heighscore = score;
            document.querySelector(".highscore").textContent = heighscore;
        }
    } else if (guess > answer) {

        if (score > 1) {
            document.querySelector(".message").textContent = "too High"
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lose Try Again ";
            document.querySelector(".score").textContent = 0;
        }

    } else if (guess < answer) {

        if (score > 1) {
            document.querySelector(".message").textContent = "too Low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lose Try Again ";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    answer = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
});