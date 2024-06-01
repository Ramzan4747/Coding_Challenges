/* 
Q: Write Function findLongestWord that takes a string as input and return the longest word in the string.


Constrints: 
It may contain alphabets, digits, spaces, punctuation
Input string must be non-empty
Input string may contain multiple words separated by spaces


Note:
If input string is emppty or contains only whitespace, the function should return false
Function should ignore leading and trailing whitespaces when determining the longest word
*/

// Method 1:

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    console.log("enter something");
    return false;
  }
  let words = str.split(" ");
  words.sort((a, b) => b.length - a.length);
  console.log(words);
  return console.log(words[0]);
};

// Method 2
const findLongestWord2 = (str) => {
  if (str.trim().length === 0) {
    console.log("enter something");
    return false;
  }

  let words = str.split(" ");
  return console.log(
    words.reduce(
      (accum, currentWord) =>
        currentWord.length > accum.length ? currentWord : accum,
      ""
    )
  );
};

// Executing Functions
findLongestWord("Welcome Hello ji");
findLongestWord2("Pakistan Hello ji");
