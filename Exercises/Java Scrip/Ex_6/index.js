let time = Number(prompt("Please enter the time in 24 hours format"));
if (time<0 || time>23){
    time=Number(prompt("Sorry, it is incorrect please try again!"));
} else if (time<8 || time>=18){
    alert("Sorry! office is close! Please check later.");
}
    else if (time>=8 && time<18){
        alert("Hi! We are open and at your service!")
    }
