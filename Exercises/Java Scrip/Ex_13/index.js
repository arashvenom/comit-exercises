let array = [1,2,3,4,5];
let sqr = array.map((calc)=>calc*calc);

console.log(sqr);


let secArray = [1,2,3,4,5,6,7,8,9,10];

let even = secArray.filter((evenCalc)=>evenCalc %2==0);
console.log(even);

let odd = secArray.filter((oddCalc)=>oddCalc %2!=0);
console.log(odd);

let obj = [
    {name:"Arash", age:33, city:"Winnipeg"},
    {name:"Michel", age:31, city:"Victoria"},
    {name:"Niki", age:15, city:"Saskatoon"},
    {name:"Viki", age:41, city:"Toronto"},
    {name:"James", age:24, city:"Tehran"}
];
console.log(obj);

let overThirty = obj.filter((thirty)=>thirty.age>30);
console.log(overThirty);

let sask = obj.filter((cityBased)=>cityBased.city=="Saskatoon"&&cityBased.age<20);
console.log(sask);

let allAges =obj.map((ages)=>ages.age);
console.log(allAges);