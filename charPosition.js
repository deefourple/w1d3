// Instead of having your function countLetters return just the count of each letter,
// the requirement has changed to return all the indices (zero-based positions) in the string where each character is found.
// So for each letter, we're no longer returning just one number to represent its number of occurrences,
// but rather (potentially) multiple numbers to represent all the places in the string that it shows up.

//display all the index instances in an array as the new value for each key

var finalObject = {
countLetters: function(string) {
  characterArray = string.split("");
  for (var i = 0; i < characterArray.length; i ++) {
    if (characterArray[i] === " ") {
      continue
    }
    if (finalObject.hasOwnProperty(characterArray[i]) === false) {
      finalObject[characterArray[i]] = [i];
    }
    else {
      finalObject[characterArray[i]].push(i);
    }
  }
}
};
finalObject.countLetters("abcdefggfedcba")
console.log(finalObject);

