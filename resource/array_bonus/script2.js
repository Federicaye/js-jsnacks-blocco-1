function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cars1 = [2, 4, 6, 8, 9];
let cars2 = [4, 5, 7, 8, 0, 7, 8, 5, 3, 2];

let difference = cars2.length - cars1.length
console.log(difference);
for (let i = 0; i < difference; i++) {
    cars1.push(getRndInteger(1, 10))
}

console.log(cars1);
console.log(cars2);