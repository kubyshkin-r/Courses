//1
const myName = 'Anton';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Arkadi';
const reasonText = 'этим можно выёбываться';
const numberOfMonth = '1';

let final = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;

console.log(final);

//2
let myInfoText = final.replaceAll('JavaScript', "JAVASCRIPT"); 
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);

//3 и 4
let userName = prompt('Как зовут?');
    userName = userName.toLowerCase().trim();
let userAge = prompt('Сколько вам лет?');  /* можно ли объявить переменную и сразу привести её к Number в одной строке */  
    userAge = Number(userAge.replaceAll(' ', '')); /*сначала сделал .trim() но так проверка совершенней, тк удаляет проблы в середине строки*/
alert(`Вас зовут ${userName} и вам ${userAge} лет`);


// Ответы на вопросы:
/* можно ли объявить переменную и сразу привести её к Number в одной строке 
Ответ: Можно. let userName = Number('123') сразу станет переменной с числом 

*/