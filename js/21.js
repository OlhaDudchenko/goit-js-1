function isNumberInRange(start, end, number) {
  const isInRange = number>=start&& number<=end; // Change this line

  return isInRange;
}

console.log(isNumberInRange(10, 30, 17));