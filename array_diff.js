function arrayDiff(a, b) {
  b.forEach((el1) => {
    a.forEach((el2) => {
      if (el1 == el2) {
        a.filter(() => {
          console.log(a);
          const c = a.indexOf(el2);
          console.log(c);
          a.splice(c, 1);
          console.log(a);
        });
      }
    });
  });
  return console.log(a);
}

// arrayDiff([1, 2], [1]);
// arrayDiff([1, 2, 3], [1, 3]);
// arrayDiff([1, 2, 2, 3, 4], [2, 4]);
arrayDiff([1, 2, 2], [1]);
arrayDiff([1,2,2], [2]);
arrayDiff([1,2,2], []);
arrayDiff([], [1,2]);
arrayDiff([1,2,3], [1,2]);
