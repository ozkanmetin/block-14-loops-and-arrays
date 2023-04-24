for(let i=1; i<101; i++) { // start a loop 1 to 100
    if(i % 15 == 0) { // print the numbers are multiples of both 3 and 5
        console.log("FizzBuzz");
    } else if(i % 3 == 0) { // print the number is multiple of 3
        console.log("Fizz");
    } else if(i % 5 == 0) { // print the number is multiple of 5
        console.log("Buzz");
    } else {
        console.log(i); // print the other numbers
    }
}