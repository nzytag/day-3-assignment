'use strict';
alert('Hi there, thanks for visiting my portfolio!');

var user = prompt('What is your name?');
console.log('user:', user);
alert('Hi there ' + user + ' , I\'m going to ask you a question:');
var answer = prompt(user + ' this is a yes/no question. Please answer with Y or N. Have you seen my work?');
console.log('users answer:', answer);
if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES') {
  alert('Great!');
} else {
  alert('Well, thanks for visiting my site');
}
alert('I am gonna ask you another question?');
var profession = prompt(user + ',  what is your profession?');
console.log('profession:', profession);
alert('Nice, I always thought being a ' + profession + ' was hard!');
var lovedIt = prompt(user + ' do you like being an ' + profession + '?');
console.log('loved it:', lovedIt);
if (lovedIt === 'Y') {
  alert('Awesome, I enjoy being a developer!');
} else {
  alert('Oh well, I guess it pays well huh?');
}
var time = prompt('By the way, do you have time to browse through my site?');
console.log('time to visit my :', time);
alert('Thanks ' + user + ' im sure you\'ll enjoy what you\'ll see!');

alert('Let\'s play a little guessing game');

var languages = ['HTML', 'CSS', 'JAVASCRIPT'];
var info = prompt('What languages I have learned?');
var flag = false;
var guesses = 3;
while (guesses > 0 && flag === false) {
  guesses--;
  for (var i = 0; i < languages.length; i++ ) {
    console.log('each iteration:', languages[i]);
    //do stuff here
    if (info.toUpperCase() === languages[i]) {
      alert('nice job!  you got it right!');
      flag = true;
      break;
    }

  }
  if (!flag) {
    input = prompt('try again');

  }
}
if (!flag) {
  alert('nope, you are wrong!');
}
//uploaded
