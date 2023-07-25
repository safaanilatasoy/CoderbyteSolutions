function FindIntersection(strArr) {
  const subArr1 = strArr[0].split(", ").map(Number);
  const subArr2 = strArr[1].split(", ").map(Number);

  const intersection = subArr1.filter((number) => subArr2.includes(number));

  if (intersection.length === 0) {
    return "false";
  }

  return intersection.sort((a, b) => a - b).join(",");
  // code goes here
  return strArr;
}

// keep this function call here
console.log(FindIntersection(readline()));
