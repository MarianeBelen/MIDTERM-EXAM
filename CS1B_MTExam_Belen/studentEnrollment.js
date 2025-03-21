/*
BELEN, Mariane I.
BSCS 1B
MIDTERM EXAM - DSA
studentEnrollement.js
*/
//create 2 empty arrays to be stored later
let dsa = [];
let webDev = [];
//create variable & use prompt to input whether to choose a or b
let select = prompt("Please select subject (A)- DSA, (B)-WebDev");

//Use else if statement
//if the select is = a or A then it will excute its blocks of code
if (select === 'a' || select === 'A'){
    //create another variable whether to a enroll, b to unenroll or c select another subject
    let operation = prompt("Choose between (A)-Enroll, (B)-Unenroll, (C)-Another Sub");
    
    //if operation is = a or A then it will execute its blocks of code
    if(operation === 'a' || operation === 'A'){
        //Create studname variable & use prompt to ask for the student's name
        let studname = prompt("Please enter your name to enroll in DSA: ");
        //Use .push and the studname variable to store it in the empty array
        dsa.push(studname)
        //log the studname
        console.log(`${studname} is enrolled in DSA.`);
    }
    //if operation is b then it will execute its block of code
}else if(operation === 'b' || operation === 'B'){

}