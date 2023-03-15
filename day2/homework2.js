//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// Define a function to display foods
function displayFoods(person){
    // key pizza has value of an array, for loop to display all the elements individually
    for (food of person.pizza){
        console.log(food)
    }
    // key tacos and burger both have values of string, display strings in one statement
    console.log(person.tacos, person.burgers)
    // key ice_cream has a value of an array, for loop to display all the elements individually
    for (food of person.ice_cream){
        console.log(food)
    }
    // key shakes has value of an array with a dicitonary inside
    // index into the dictionary and use Object.values with a for loop to display elements individually
    for (food of Object.values(person.shakes[0])){
        console.log(food)
    }
}

// Call the function
displayFoods(person3)

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person {
    // Constructor with the two parameters
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // Method that displays the persons name and current age
    printInfo = () => `${this.name} is ${this.age}`

    // Method that increments the age of the person by 1 with the ++ operation each time the method is called
    ageUp = () => this.age++
}

// create a new instance and age them up by three years (call the method three times on the instance)
var person1 = new Person('Dylan Katina', 999)
person1.ageUp()
person1.ageUp()
person1.ageUp()
console.log(person1.printInfo())
// create another new instance
var person2 = new Person('Christian Askew', 21)
console.log(person2.printInfo())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// Attampt at a Promised based function
// Define the promise function
var test = new Promise(function(resolve, reject) {
    //producing code sets the variable stringy = a string
    var stringy = 'Hello World'
    
    // Checks if the string's lenght is greater than 10
    if (stringy.length > 10) {
      resolve('Big word')
    } else {
      reject('Small Number')
    }
  })

//callback function waits for the promise to come back before running
test.then(
    // Value if the promise is resolve
    function(value) {console.log(value)},
    // Value if the promis is reject
    function(error) {console.log(error)}
  )
// ============= Codewars ============//
// Question:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Solution:
// function boolToWord( bool ){
//     Check if book is true/false and return "Yes" or "No" accordingly
//     return (bool == true) ? ('Yes') : ('No')
//   }

// Question:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Solution:
// function paperwork(n, m) {
//      Check if both n and m are greater than zero before multiplying, else return 0
//      && is javascript version of 'and' in python
//     if (n > 0  && m > 0){
//       return n*m
//     } else {
//        return 0
//     }
//   }