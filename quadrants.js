function quadrant(x, y) {
  switch (x != 0 && y != 0) {
    case (x > 0 && y > 0):
        return 1;
      break;
    case (x < 0 && y > 0):
        return 2;
      break;
    case val(x < 0 && y < 0):
        return 3;
      break;

    case (x > 0 && y < 0):
        return 4;
      break;
  }
}
