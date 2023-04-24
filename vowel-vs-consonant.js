const vowels = ["a","e","i","o","u"]; // create a vowel array with values
const word = "textbook"; // create test word
let numberOfVowels = 0, numberOfConsonants = 0; // create 2 vars to count vowels and consonants

for(let i=0; i < word.length; i++) { // start a loop to walk on the word
    if(vowels.includes(word[i])) { // check if the letter is vowel
        numberOfVowels++; // if true, increment the vowel counter
    } else {
        numberOfConsonants++; // if false, increment the consonant counter
    }
}

console.log(word + " has " + numberOfConsonants + " consonants and " + numberOfVowels + " vowels");