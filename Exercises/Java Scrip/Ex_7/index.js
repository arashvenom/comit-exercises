let sum=0;
for (let i=0; i<=1000; i++){
    sum += i;
    if(sum>400){
        break;
    }
}
console.log("Sum is equal to",sum);

for (let i=0; i<=10; i++ ){
    console.log(i);
}

for (let i=100; i>=0; i-- ){
    console.log(i);
}


let stars="";
for (let count=1; count<=13; count++){
    stars+="*";
    console.log(stars);
}

let starsWhile="";
let i=0;
while( i<=13){
    starsWhile+="*";
    i++;
    console.log(starsWhile);
}

let starDo="*"
let j =0;
do{
console.log(starDo);
starDo+="*";
j++;
}
while (j < 13);