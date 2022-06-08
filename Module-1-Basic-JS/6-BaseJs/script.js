//задание 1
/*
const existedUserLogin = 'the_best_user';
const existedUserPassword = 12345678;

let userLogin = prompt("Введите логин");
userLogin = userLogin.trim();
let userPassword = Number(prompt("Введите пароль"));

console.log(userLogin);
console.log(typeof userPassword);



if(existedUserLogin === userLogin && existedUserPassword === userPassword){
    alert(`Добро пожаловать, ${userLogin}!`);
}
else{
    alert('Логин и (или) Пароль введены неверно!');
}
*/


//задание 2

const question1 = 4;
const question2 = 4;
const question3 = 1;
const question4 = 12;
const question5 = 6;

let correctAnswers;
let incorrectAnswers = 0;

const answer1 = Number(prompt('Сколько будет 2 + 2?'));
if(answer1 === 4){
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}
console.log(incorrectAnswers);
// const answer2 = Number(prompt('Сколько будет 2 * 2?'));

// const answer3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'));

// const answer4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'));

// const answer5 = Number(prompt('Сколько будет 2 + 2 * 2?'));