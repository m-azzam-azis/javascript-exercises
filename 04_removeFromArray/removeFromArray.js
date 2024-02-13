const removeFromArray = function(array, ... args) {
  let ans = [];
  array.forEach(element => {
    if (!args.includes(element)) {
      ans.push(element);
    }
  });
  return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
