function LongestWord(sen) {
  let splitWord = sen.replace(/[^\w\s]/g, "").split(" ");
  let longestWord;
  let longestWordNumber = 0;

  splitWord.forEach((subArr) => {
    const wordWithoutSymbols = subArr.replace(/\d/g, "");
    if (subArr.length > longestWordNumber) {
      longestWord = wordWithoutSymbols;
      longestWordNumber = subArr.length;
    }
  });
  // code goes here
  return longestWord;
}

// keep this function call here
console.log(LongestWord(readline()));
