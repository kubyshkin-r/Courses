const name1 = 'Max'
const name2 = "Max"
const name3 = `Max`

console.log(name1)
console.log(name2)
console.log(name3)

const name4 = `Max`
const prof1 = 'js разработчик'
// const allInfo = name4 + ' ' + prof1

const allInfo = `${name4} ${prof1}`;
console.log(allInfo .length);
E(prof1[0]);
E(prof1.toLowerCase());
E(prof1.toUpperCase());
E(prof1.indexOf('js'));
E(prof1.slice( 2, 5))
E(prof1.replace('js', 'Python'));
E(prof1.repeat(5));
const name5 =  `    jac      `
E(name5);
E(name5.trim());



















function E(a) {
    console.log(a);
}