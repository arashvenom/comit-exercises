function multiplyNumeric(menuObject){
    if(!menuObject){
        console.log(typeof menuObject);
        return;
    }
    for(let prop in menuObject){
        if (typeof menuObject[prop]=== "number"){
            menuObject[prop] *=2;
            console.log(typeof menuObject[prop]);

        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  console.log(menu);
