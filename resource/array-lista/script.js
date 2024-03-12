let fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

fruits.push = 'pesca';
let check = false;
for (let i = 0; i < fruits.length; i++) {
    if ('cocomero' === fruits[i]) {
        check = true;
       
    } else {
        
    }

}
console.log(check);

if (check){
    console.log("Trovato! Devo solo preparare il cocktail.")
}else {
    console.log("Oh no, devo uscire a comprare il cocomero!")
}


