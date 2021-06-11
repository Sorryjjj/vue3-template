var hammingDistance = function (x, y) {
  x = x.toString(2);
  y = y.toString(2);
  let res = 0;
  let len = Math.max(x.length, y.length);
  console.log(x, y);
  for (var i = 0; i < len; i++) {
    let tmpx = x[i] == undefined ? 0 : x[i];
    let tmpy = y[i] == undefined ? 0 : y[i];
    // console.log(tmpx, tmpy);
    if (tmpx != tmpy) {
      res++;
    }
  }

  return res;
};

console.log(hammingDistance(1, 4));
