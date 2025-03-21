/*
BELEN, Mariane I.
BSCS 1B
MIDTERM EXAM - DSA
classSubjects.js
*/

//Create variables & use prompts to store their subject title, schedule, classroom, instructor, and studentname.
let subject = prompt("Please enter subject title: ");
let classSched = prompt("Please enter you class schedule(Time,Days): "); 
let classroom = prompt("Please enter your classroom: ");
let classIns = prompt("Please enter Class Instructor: ");
let studName = prompt("Please enter the Student Name: ");

//log them using backticks, dollar sign & curly braces inside the given sentence
console.log(`${studName} is currently enrolled in ${subject} with a class schedule of ${classSched} at room ${classroom}. The instructor for the subject is ${classIns}`)