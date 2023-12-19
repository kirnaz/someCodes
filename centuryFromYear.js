function century(year) {
  let centuryY = 0;
  if (year % 100 === 0) {
    centuryY = year / 100
  } else if (year % 100 !== 0) {
    centuryY = ((year / 100) >> 0) + 1
  }
  return centuryY
}

century(2000);
century(1601);