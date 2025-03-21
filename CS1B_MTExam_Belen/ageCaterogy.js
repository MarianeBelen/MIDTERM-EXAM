/*
BELEN, Mariane I.
BSCS 1B
MIDTERM EXAM - DSA
ageCategory.js
*/

//Create variable age & use prompt to ask for their age.
//Use parseInt to convert it into numbers
let age = parseInt(prompt("Please enter you age: "));

//Use else if to identify each of their category according to age
if (age <= 5){  //If age is less than or equal to 5 then it will log 'Todler;
    console.log("Toddler");
//if age is > 5 & < or = 12 the it will log 'Child'
}else if(age > 5 && age <= 12){
    console.log("Child");
//if age is > or = 13 & < or = 19 then it will log 'Teenager'
}else if(age >= 13 && age <= 19){
    console.log("Teenager")
//if age is > or = 20 & < or = 35 then it will log 'Young Adult'
}else if(age >= 20 && age <= 35){
    console.log("Young Adult");
//if age is > oor = 36 & < or = 60 then it will log 'Middle-Aged'
}else if(age >= 36 && age <= 60){
    console.log("Middle-Aged");
}else{ //else, if its non of the above or beyond 60 means they are senior
    console.log("Senior")
}