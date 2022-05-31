let userText = prompt('Введите текст');
userText = userText.trim();
let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim();

let indexOfWord = userText.indexOf(wordFromText);
console.log(indexOfWord); //если не правильно вводишь то получаем -1 и в следующей строке обезка идет с нулевого до предпоследнего.я выпал с этого, когда понял
userText = userText.slice(0, indexOfWord);
console.log(userText);
alert(userText); 