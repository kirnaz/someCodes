function inArray(array1,array2){
  const r = [];
  let i = 0;
  array2.forEach((element) => {
    array1.forEach((e) => {
      if (element.includes(e)) {
        r.push(e)
      }
    })
  })
  return r1 = Array.from(new Set(r)).sort(); ;
}
