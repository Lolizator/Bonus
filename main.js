let num = 266219;
let mult = 1;

while (num > 0) {
    mult = mult * (num % 10);
    num = Math.floor(num / 10);
}

console.log(mult);

mult = mult ** 3;
console.log(mult);

console.log(String(mult).slice(0,2));