const add = function(...nums) {
  let sum = 0;
	nums.forEach( num => sum += num );
  // for (num in nums) {
  //   sum += num;
  // };

  return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
  total = 0;
	nums.forEach( num => total += num );
  console.log(typeof total)

  return total;
};

const multiply = function(nums) {
  total = 1;
	nums.forEach( num => total *= num );
  return total;
};

const power = function(base, pwer) {
	return base**pwer
};

const factorial = function(num) {
	if (num < 0) {
    return "ERROR";
  };
  total = 1;
  for (let i = num; i > 0; i --) {
    total *= i;
  };
  return total;
};
console.log(sum([1,2,3,4]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
