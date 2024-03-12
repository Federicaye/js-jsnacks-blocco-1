let fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

fruits.push = 'pesca';
let check = false;
for (let i = 0; i < fruits.length; i++) {
    if ('cocomero' === fruits[i]) {
        check = true;
        console.log('Trovato! Devo solo preparare il cocktail')
    } else {
        console.log('Oh no, devo uscire a comprare il cocomero!')
    }

}
console.log(check);

let numbers; 
numbers.length = (prompt("Enter a number"));

for (let i =0; i<numbers.length; i++) {
    numbers.push(getRndInteger(1,100))
}

for (let i = 0; i<5; i++) {
    console.log(numbers.length - i)
}