let userString = prompt('Введите текст для обрезки');
    userString = userString.trim();
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
    startSliceIndex = Number(startSliceIndex);
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
    endSliceIndex = Number(endSliceIndex);
alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`)