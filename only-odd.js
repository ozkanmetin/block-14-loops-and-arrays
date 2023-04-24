// create an array and assign values
//const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const numbers = [70, 42, 55, 81, 21, 91, 34];
const numbers = [2, 4, 6, 8, 10, 11, 12];
// create an empty array
let oddNumbers = [];

// start a loop
for(let i=0; i < numbers.length; i++) {
    // test if value is odd
    if(numbers[i] % 2) {
        // insert the odd value into the new array
        oddNumbers.push(numbers[i]);
    }
}

console.log(oddNumbers);