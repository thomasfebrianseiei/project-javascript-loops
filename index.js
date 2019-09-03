console.log("do while");

let iteration = 1;

do {
  console.log(iteration);
  iteration += 5;
} while (iteration < 100);

console.log("forloop");

for (let index = 0; index <= 100; index += 10) {
  console.log(index);
}

console.log("otherForLoop");

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}

console.log("");
console.log("Challenge");

var num = 4;
var factorialNumber = 1;
for (let i = 1; i <= num; i++) {
  factorialNumber += factorialNumber * (num - i);
}
console.log(factorialNumber);

console.log("");
console.log("Challenge 2");

var input = "Thomas"
var newKata = "";
for (let i = input.length-1 ; i >= 0; i--) {
    newKata += input[i];
}
console.log(newKata)
