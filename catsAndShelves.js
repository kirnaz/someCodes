function solution(start, finish) {
  let step = start;
  let count = 0;
  do {
  if ((step + 2) < finish) {
    step += 3;
    count += 1;
  } else if (start == finish ) {
    count = 0;
    step = finish
  } else {
    step += 1;
    count += 1;
  }} while (step != finish)
 return count; }