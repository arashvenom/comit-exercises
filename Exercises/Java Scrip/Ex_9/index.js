function calcEven(){
    for (let i=0;i<=100;i++){
        if (i%2==0){
            console.log(i);
        }
        
    }
}

function showUser(){
    let name =" Arash";
    let age = 33;
    let phoneNumber = 2042905009;
    let postalCode = "r3m0x9";
    let marriage = false;
    console.log( "Name is:" ,name  );
    console.log( "Age is:" ,age  );
    console.log( "Phone Number is:" ,phoneNumber  );
    console.log("Postal Code is:" ,postalCode);
    console.log("Marriage status is:", marriage);
}


calcEven();
showUser();

let evenNumbers = function(){
    for (i=0;i<=100;i++){
        if (i%2==0){
            console.log(i);
        }
    }
};

evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();

function fibonacci(num){
    let a = 1, b = 0, temp;
    console.log(b);
    for (let i=1; i <= number; i++){

      temp = a;
      a = a + b;
      b = temp;
      
      console.log(b);
    }
  
  }
  let number = Number(prompt("Enter the number"));
  fibonacci(number);

  let showName=function(){
    alert("==========\n=      Arash      =\n ==========");
  };
  showName();
