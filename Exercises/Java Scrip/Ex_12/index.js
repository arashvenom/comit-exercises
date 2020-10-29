let fav = prompt("Enter your top 3 movie name separated by comma");

let movies = fav.split(',');
for (let movie of movies) {
    console.log( `Movie Name: ${movie}.` ); 
  }


  let sent = prompt("Enter a sentence to reverse")
  function reverseString(sentence){
        let reversed = sentence.split(' ');
        reversed.reverse();
        let str = reversed.join(' ');
        return str;

  }

  alert (reverseString (sent));


  