//If condition
/*
let x=10;
if(x>0){
    console.log("positive");
}
else if(x<0){
    console.log("negative");
}
else{
    console.log("zero");
}
*/

let x=10;
if(x%2==0){
    console.log('even num');
}
else{
    console.log('odd num');
}

//Logical operator


let age = 19;
let gender = 'F';

if (age >= 21 || (age >= 18 && gender == 'F')) {
    console.log("Eligible");
} else {
    console.log('Not Eligible');
}






//Switch

let m=10;

switch(m){
      case 1:
        console.log('one');
        break
        case 2:
        console.log('two');
        break
        case 3:
        console.log('three');
        break
      default:
        console.log("Number greater than 3");

}




let a=12;
function oddEven(a){
    if(a%2==0){
        return "Even";
    }return"odd";
}
console.log(oddEven(a));
