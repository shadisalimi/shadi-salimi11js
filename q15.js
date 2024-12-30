// * ===================================3====================================

/*
 ? look at the code below:
 todo: 1. modify the function to get the square of arguments
 todo: 2. you're allowed to give just ONE PARAMETER when calling the function
 todo: 3. you MUST use both given arguments (num & pwr) inside the func
*/

// correct: sqrFunc(10) => 100
// incorrect: sqrFunc(10, 2) => 100
const sqrFunc = (num, power) => {
    if(!isNaN(power)) {
      return num**power
    }
    if(isNaN(power)) {
      return num**2
    }
    return "undefined" 
};


console.log(sqrFunc(10, 2));
console.log(sqrFunc(10));