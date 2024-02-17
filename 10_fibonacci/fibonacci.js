const fibonacci = function(num) {
  const intNum = parseInt(num);
  if (intNum < 0) return "OOPS";
  let last = 0
  let next = 1
  for (let i = 1; i <= intNum; i++) {
    [last, next] = [next, next+last];
  }
  return last
};

// Do not edit below this line
module.exports = fibonacci;
