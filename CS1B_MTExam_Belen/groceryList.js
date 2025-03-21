/*
BELEN, Mariane I.
BSCS 1B
MIDTERM EXAM - DSA
groceryList.js
*/

//create let variable list and use prompt to ask if they should create list or not.
let list = prompt("Create a grocery list (y/n): ");

//use else if statement to determin if the input is 'y' or 'Y'. If yes it will execute the if blocks of code.
if(list === 'y' || list === 'Y'){
    //Create another variable to ask numbers of grocery items
    let numberItems = parseInt(prompt("Please enter number to be registered in the grocery list"));
    let groceryList = []; //Create an empty list to store the items to be inputed
    //Use for loop & = i to 0 and if i is < the number to be input it will go to the item variable
    for(let i = 0; i < numberItems; i++){ //and it will increment until the numberItems is reached
        //Create item variable & use prompt to enter items
        let item = prompt(`Please enter item ${i + 1}:`);
        groceryList.push(item); //Use .push to add the item to groceryalist
    }
    //Create another list where groceryList is sorted. Use .toSorted not to touch the original list
    let sortedList = groceryList.toSorted();
    //Create another list where groceryList is to be reversed. Use ,toreversed not to touch th original
    let reversedList = groceryList.toReversed();

    //Use alet to display the groceryList, sortedList, & reversedList
    alert(`Grocery List; \n ${groceryList}\n`);
    alert(`Sorted List: \n ${sortedList}\n`);
    alert(`Reversed List: \n ${reversedList}\n`);
}else{ //else if the input is 'n' and will display the alert 
    alert("There is no Grocery List.");
}

/*
Output:
Grocery List:
soap,brush,powder,detergent,colgate
Sorted List:
brush,colgate,detergent,powder
Reversed List:
colgate,detergent,powder,brush,soap
*/