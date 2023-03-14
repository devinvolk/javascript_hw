//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    // split the string into an array of individual words without the punctuation
    var words = dog_string.split(/\W+/)
    console.log(words)

    // test if the for loop works

    for (word of dog_names){
        console.log(word)
    }

    // iterate over dog_names and compare each name to the words in var words with .includes() method
    for (word of dog_names){
        if (words.includes(word) == true) {
            console.log(`Matched ${word}`)
        } else {
            console.log('No Match')
        }
    }
}

//Call method here with parameters

findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    // iterate over the array by index values
    for (index in arr){
        // if index walue is even, remove value and replace with 'even index'
        // .splice(start index, delete count, value to replace with)
        if (index % 2 == 0){
            arr.splice(index, 1, 'even index')
        }
    }
    // reutrn the original array since .splice works inplace
    return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// From codewars

// This code does not execute properly. Try to figure out why.

// initial function
// function multiply(a, b){
//     a * b
//  }

// solution (added the return)
function multiply(a, b){
    return a * b
 }

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Solution (we did this in class, but I didn't look when I wrote it out, promise)
function evenOrOdd(number) {
    return (number % 2 == 0) ? ('Even') : ('Odd')
  }