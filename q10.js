// ? 10. Write a function which accepts a single array argument.
// todo1 : It should return an object with the keys first, second, third, and rest.
// todo2 : first: the first element in the array
// todo3 : second: the second element in the array
// todo4 : third: the third element in the array
// todo5 : rest: all other elements in the array
// Hint  : You can write a one line function to make this work using : An arrow function and array destructuring in the function argument

const ArrayOfNames = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];

// ! Answer
 const [first,second,third,...rest]=ArrayOfNames

function arrayName(arr){
    const [first,second,third,...rest]=arr
    return[first,second,third,rest]

}
const result= arrayName(ArrayOfNames)
console.log(result);