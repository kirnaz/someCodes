function solution(number){
  let sum = 0, i = 0;
  do {
    if (number <= 0) {
      sum = 0
      i = number
  } else if ((i % 3 === 0) || (i % 5 === 0)) {
    sum += i
    i++
  } else {
    i++
  }} while (i != number)
  
  return sum
}