let style = ["Jazz","Blues"];
console.log(style);
style.push("Rock-n-Roll");
console.log(style);
style[1]="Classic";
console.log(style);
style.shift();
console.log(style);
style.unshift("Rap","Reggae");
console.log(style);

let firstArr = [3, 4]
let secondArr = [5, 6];

let thirdArr = [];

thirdArr.push(firstArr, secondArr);

console.log(thirdArr);