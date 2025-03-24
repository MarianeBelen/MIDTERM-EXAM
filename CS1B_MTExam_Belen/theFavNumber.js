/*
BELEN, Mariane I.
BSCS 1B
MIDTERM EXAM - DSA
theFavNumber.js
*/

//Create variable to store the number to guess
let theFavNumber = 7;

//Create another Variable and use prompt to ask for the guesser. Use parseInt to convert it into number
let userGuess = parseInt(prompt("Please enter your guess: "));

//Use ehile loop to identefy either the guess number is too high or too low
while (userGuess !== theFavNumber){
    if(userGuess > theFavNumber){   //guess is greater than
        console.log("Too High!");
    }else{   //guess is less than
        console.log("Too Low!");
    }
    //declare again the userGuess so that it will ask again if is wrong
    userGuess = parseInt(prompt("Please enter your guess: "));
}
//if the guess is correct it will log Correct!
console.log("Correct!")
