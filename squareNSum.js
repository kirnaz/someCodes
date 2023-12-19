function squareSum(numbers){
  let sum = 0, i;
  numbers.forEach(element => {
    i = element * element;
    sum = sum + i;
  })
  return sum
}