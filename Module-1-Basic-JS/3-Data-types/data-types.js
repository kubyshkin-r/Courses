const brandName = "Honda";
const model = Symbol("civic");
const horsepower = 150;
const isCar = true;
const VIN = 3546345674n;
const accident = null;
const price = undefined;
const owner = {
    name: 'Roman',
    lastName: 'Kub',
    age: 31,
    gender: 'male'
};


console.log('Марка', brandName, typeof brandName);
console.log('Модель', model, typeof model);
console.log('Л.С.',  horsepower, typeof  horsepower);
console.log('Это машина?',  isCar, typeof  isCar);
console.log('VIN',  VIN, typeof VIN);
console.log('Были ли дтп', accident, typeof accident);
console.log('Цена', price, typeof price);
console.log('Данные владельца', owner, typeof owner)