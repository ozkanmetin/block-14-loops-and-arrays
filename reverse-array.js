const inputArray = [20, 50, 30, 60, 200]; // create an input array and assign values
let reversedArray = []; // create an empty array for reversed array

for(let i=0; i < inputArray.length; i++) { // start a loop
    reversedArray.unshift(inputArray[i]); // insert the element at the start
}

console.log(reversedArray);