function toNumberArray(stringarray){
  let arrayOfNumber = [];
  stringarray.forEach(element => {
     arrayOfNumber.push(+element)
  });
  return arrayOfNumber;
}