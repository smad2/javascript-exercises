const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  //first dummy aproach
  // let sum = 0;
  // for (const num of array) {
  //   sum += num;
  // }
  // return sum;
  //also with Math.sumPrecise()
  //also with reduce
  return array.reduce((sum , num) => sum + num,0);


};

const multiply = function (array) {
  // let prod = 1;
  // for (const num of array) {
  //   prod *= num;
  // }
  // return prod;
  // with reduce
    return array.reduce((total, current) => total * current);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
  //or num1 ** num2;
};

const factorial = function (num) {
  if(num === 0) return 1;
  let fact = num;
  while(num>2){
    fact = fact * (num-1);
    num--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
