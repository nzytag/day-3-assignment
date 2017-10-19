'use strict';
alert('Hi there, thanks for visiting my portfolio!');

function question(qtnTxt) {
  var result = prompt(qtnTxt);
  console.log(qtnTxt, ':', result);
  return result;
}

//Ask first question for user name with function
var user;
user = question('What is your name?');
alert('Hi there ' + user + ' , I\'m going to ask you a question:');

//question 2 text
var answer;
answer = question (user + ' this is a yes/no question. Please answer with Y or N. Have you seen my work?');
if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES') {
  alert('Great!');
} else {
  alert('Well, thanks for visiting my site');
}


alert('I am gonna ask you another question?');
var profession;
profession = question(user + ', what is your profession?');

//if first letter of profession is a vowel make 'an'
var aOrAn;
if (profession.charAt(0) === 'a' || profession.charAt(0) === 'e' || profession.charAt(0) === 'i' || profession.charAt(0) === 'o' || profession.charAt(0) === 'u') {
  aOrAn = 'an';
} else {
//if not (else) then make 'a'
  aOrAn = 'a';
}
alert('Nice, I always thought being ' + aOrAn + ' ' + profession + ' was hard!');

var lovedIt = prompt(user + ' do you like being ' + aOrAn + ' ' + profession + '?');
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
