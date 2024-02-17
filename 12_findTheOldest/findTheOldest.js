const findTheOldest = function(arr) {
  let oldest = 0;
  let oldestObj = {};
  arr.forEach(element => {
    const age = getAge(element.yearOfBirth, element.yearOfDeath)
    if (age > oldest) {
      oldest = age;
      oldestObj = element
    }
  });

  return oldestObj;
};

function getAge(birth, death) {
  if (!death) {
    return (new Date()).getFullYear() - birth;
  } else {
    return death - birth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
