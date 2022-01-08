document.getElementById("button-confirm").onclick = function(){
    document.getElementById("text-confirm").innerHTML = 
    "order placed please wait";
    document.getElementById("button-confirm").style.display = "none";
}
//var username = prompt();
//console.log(username);
var num1 = 50;
var num2 = num1;
//console.log("num2 is "+ num2);



    var input = Number(prompt("enter a number"));
    console.log(input, " decimal versus decimal with comma ", input);
    console.log(input + " decimal versus decimal with plus "+ input);
    console.log(input, " decimal versus binary based 2 with comma ", input.toString(2));
    console.log(input + " decimal versus binary based 2 with plus " + input.toString(2));
