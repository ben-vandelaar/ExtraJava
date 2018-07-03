//Java Practice

//creates a P tag and says hello world.
var para = document.createElement("p");
document.body.appendChild(para);
document.querySelector("p").innerHTML = "Hello World";

//Looking at the documentation it can also be done by writing 
//var t = document.createTextNode("This is a paragraph")
//and "apending" it to the P tag 
//para.appendChild(t);


//Name Alerter
var name = prompt("Please enter your name", "Name");

if (name != null) {
    alert(
    "Hello " + name + "! How are you today?");
}


//Writing the same code to only Say hi to certain names.

var name = prompt("Please enter your name", "Name");

if (name == "Alice" || name == "Bob") {
    alert(
    "Hello " + name + "! How are you today?");
}else{
alert("INTRUDER");
}

//A program that only takes certain numbers. 

var n = prompt("Please enter a Number");

if (n % 3 == 0 || n % 5 == 0 ){
document.querySelector("p").innerHTML = n;
}else{
document.querySelector("p").innerHTML = "Please add a divisible by 3 or 5";
}

//A program that writes out the times table up to 12

var n = prompt("Please enter a Number");
var i = 0;

for(var i = 1; i <= 12; i++){
	var number = Number(n) * i;
  console.log(number);
 }

 // OR

var n = prompt("Please enter a Number");
var i = 0;

for(var i = 1; i <= 12; i++){
	var number = Number(n) * i;
  document.querySelector("p").innerHTML += number + "<br/>";
 }

 //A guessing game where the user has to guess a secret number.

var comN = Math.floor(Math.random() * 10); 
var userN = prompt("Pick a number between 1 - 10");

var game = function(){ 
    for(var i = 0; userN != comN; i++){
            if (userN == comN){
                console.log("Congradulations!! You guessed it!!");
            }else if(userN > comN){
                console.log("Lower");
              	userN = prompt("Please Try Agian");
            }else if(userN < comN){
                console.log("Higher");
              	userN = prompt("Please Try Agian");
            }       
        }  
    };
game();