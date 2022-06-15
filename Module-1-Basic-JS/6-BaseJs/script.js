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
/*
let correctAnswers = 0;
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
 const answer2 = Number(prompt('Сколько будет 2 * 2?'));
 if(answer2 === 4){
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}
const answer3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'));
if(answer3 === 1){
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}
const answer4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'));
if(answer4 === 12){
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}
const answer5 = Number(prompt('Сколько будет 2 + 2 * 2?'));
if(answer5 === 6){
    alert('Ответ Верный');
    correctAnswers++;
}else{
    alert('Ответ Неверный');
    incorrectAnswers++;
}
alert(`Правильные ответы: ${correctAnswers};\nНеправильные ответы: ${incorrectAnswers}.`)
*/


//задание 3
/*
let question1 = confirm('JavaScript появился в 1995 году?');
if(question1 === true){
    alert("Верно!");
}else{
    alert("в 1995м!");
}
let question2 = confirm('Спецификация JavaScript называется ECMAScript?')
if(question2 === true){
    alert("Верно!");
}else{
    alert("ECMAScript!");
}
let question3 = confirm('JavaScript был создан за 1 месяц?')
if(question3 === true){
    alert("Верно!");
}else{
    alert("не верно");
}
*/

//задание 4
/*
for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
       alert(`Добро пожаловать, ${newStudent}!`)
    }
 }

let i = 0;
 while(i < 3){
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if(newStudent){
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    i++;
 }
*/
 let i = 0;
 do{
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if(newStudent){
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    i++;
 }while(i < 3);