// ? 9. Get the ‘4’ from numbers array using destructuring .
//todo : Replace the legs property in person object ,with above value(‘4’).

const numbers = ['2', '3', '4'];
const person = {
  head: {
    eyes: 'x',
    mouth: {
      teeth: 'x',
      tongue: 'x',
    },
  },
  body: {
    shoulders: 'x',
    chest: 'x',
    arms: 'x',
    hands: 'x',
    legs: 'x',
  },
};

// ! Answer
let [,,third]=numbers
// console.log(third);

let {body:{legs}}=person
console.log(legs=third)