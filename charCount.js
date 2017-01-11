//Write a function countLetters that can (return to) us us all the unique characters that exist in a string that is passed into the function.

//Furthermore, the function should also report back how many instances of each letter were found in the string.

// Functions can only return one thing. That thing can (as we've seen) be a primitive data type, like a number, a boolean, null or a string.

// However, our function countLetters needs to return an object that can represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.

// What should the object returned back by countLetters look like?

// Perhaps it could return an object where the each unique character encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.


//create function that takes in a string
//split the string into individual letters
//push the function into an object array
//give the numerical value of each letter occurance
//test string with a for loop and hasOwnProperty()/Object.keys

var finalObject = {
countLetters: function(string) {
  characterArray = string.split("");
  for (var i = 0; i < characterArray.length; i ++) {
    if (characterArray[i] === " ") {
      continue
    }
    if (finalObject.hasOwnProperty(characterArray[i]) === false) {
      finalObject[characterArray[i]] = 1;
    }
    else {
      finalObject[characterArray[i]] += 1;
    }
  }
}
};
finalObject.countLetters("lighthouse labs")
console.log(finalObject);
