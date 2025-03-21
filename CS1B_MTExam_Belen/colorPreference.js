/*
BELEN, Mariane I.
BSCS 1B
MIDTERM EXAM - DSA
colorPreference.js
*/

//Create let variable with an empty list to store the colors from the loop
let colors = [];

//Use for loop and make a 3 colors from it to be stored in the list
for(let i =0; i < 3; i++){
    //Create variable and use prompt to input the colors they like
    let color = prompt(`Please enter the color that you like ${i + 1} :`);
    colors.push(color); //Use .push to add the colors
    //Crate log to log the current inputed colors
    console.log("Current prefered colors:", colors);
}
//Create log to log all the 3 colors that they like
console.log("All 3 prefered colors are:", colors);
/*
Output
Current prefered colors: ['blue']
Current prefered colors: ['blue', 'purple']
Current prefered colors: ['blue', 'purple', 'blue green']
All 3 prefered colors are: ['blue', 'purple', 'blue green']
*/