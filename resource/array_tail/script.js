function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let numbers = []; 
let numbersLength = parseInt(prompt("Enter a number"));

for (let i =0; i<numbersLength; i++) {
    numbers.push(getRndInteger(1,100))
}
console.log(numbers);

/* for (let i = 0; i<5; i++) {
    console.log(numbers[numbers.length - i])
} */

let tail = parseInt(prompt("Enter a number"));
if (tail<numbers.length){
for (let i = 0; i<tail; i++) {
    console.log(numbers[numbers.length -i])
} }