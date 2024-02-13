const sumAll = function(start, stop) {
  if (!Number.isInteger(start) || !Number.isInteger(stop)) return "ERROR";
  if (start < 0 || stop < 0) return "ERROR"
  if (start > stop) [start, stop] = [stop, start];
  let ans =0;
  for (let i = start; i <= stop; i++) {
    ans += i;
  }
  return ans;
};

// Do not edit below this line
module.exports = sumAll;
