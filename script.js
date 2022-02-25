'use strict';

let secret = Math.floor(Math.random() * 20 + 1);

const guess = parseInt(document.querySelector('.guess').value);

console.log(typeof guess);

document.querySelector('.check').addEventListener('click', e => {
  console.log(guess, secret);
  console.log(guess === secret);
  if (guess === secret) {
    console.log('sucess');
  }
  e.preventDefault();
});
