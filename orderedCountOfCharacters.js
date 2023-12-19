const orderedCount = function (text) {
  const answer = [];
  const pov = [];
  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    let n = 0;
    myArray = [];
    if (!pov.includes(element)) {
      for (let index = 0; index < text.length; index++) {
        const e = text[index];
        if (element == e) {
          n++;
        }
      }
      pov.push(element);
      myArray.push(element, n);
      answer.push(myArray);
    } else {
    }
  }
  console.log(answer);
  return answer;
};