document.getElementById("button-confirm").onclick = function(){
    document.getElementById("text-confirm").innerHTML = 
    "order placed please wait";
    document.getElementById("button-confirm").style.display = "none";
}
//var username = prompt();
//console.log(username);
//var num1 = 50;
//var num2 = num1;
//console.log("num2 is "+ num2);



  /*  var input = Number(prompt("enter a number"));
    console.log(input, " decimal versus decimal with comma ", input);
    console.log(input + " decimal versus decimal with plus "+ input);
    console.log(input, " decimal versus binary based 2 with comma ", input.toString(2));
    console.log(input + " decimal versus binary based 2 with plus " + input.toString(2));
  */

 //functions
function power(x,y){
    let total = 1;
    for(let i=0; i<y; i++){
        total *= x;
    }
    console.log(total);
}

let myFunction = function(x,y){
    let total = 1;
    for(let i=0; i<y; i++){
        total *= x;
    }
    console.log(total);
}

//myFunction(3,2);


// hoisting
/*console.log(x);
var x = 10;

var y;
console.log(y);
y =10;

hostedFunc();
function hostedFunc(){
    console.log('it will work anyway');
}

var z;
z();
z = function(){
    console.log('it wont work');
}*/

/*
function multiply(x,y){
    return x*y;
}
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function divide(x,y){
    return x/y;
}

let result = [add, subtract, multiply, divide];
console.log("add is "+ result[0](6,3)+ " subtract is "+ result[1](6,3)+ " multiply is "+ result[2](6,3)+ " divide is "+ result[3](6,3));

// members of object can be functions
let mathOperations = {
    multiplication: multiply,
    addition: add,
    subtraction: subtract,
    division : divide
};

console.log("multiplication of 5 and 4 " + mathOperations.multiplication(5,4));
console.log("addition of 5 and 4 "+ mathOperations.addition(5,4));
console.log("subtraction of 5 and 4 "+ mathOperations.subtraction(5,4));
console.log("division of 5 and 4 "+ Number.parseFloat(mathOperations.division(5,4)));

multiply.description = "it multiplies two number";
console.log(multiply.description);

function callbackEx(func){
    return func(6,6);
}
let resultOfCallback = callbackEx(multiply);
console.log(resultOfCallback);

function callbackReturnFunc(){ // return to a function
    return add;
}
console.log(callbackReturnFunc()(3,4));
*/


// we can keep results of functions with pow.calculated
/*pow.calculated = {};

function pow(x,y){
    let str = x + "^" + y;
    let total = 1;
    if(str in pow.calculated){
        console.log("found");
        console.log(pow.calculated[str]);
        return pow.calculated[str];
    }
    console.log("Calculating");
    for(let i=0; i<y; i++){
        total *= x;
    }
    pow.calculated[str] = total
    console.log(pow.calculated[str]);
    return total;
}
pow(3,2);
pow(3,2);
pow(3,3);
pow(3,4);
*/


function pow(x,y, ...extra){
    console.log(extra);
    let total = 1;
    for(let i=0; i<y; i++){
        total *= x;
    }
    console.log(total);
}
pow(4,5,6,7,8,9);
