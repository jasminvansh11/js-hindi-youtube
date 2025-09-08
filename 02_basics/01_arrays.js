// arrays

const myArr = [0,1,2,3,4,5,6]
const myHeroes = ["Jay Shree Krishana","Ram","Ganapati Bappa","Hanuman Dada"]

// console.log(myArr);
// console.log(myHeroes);


const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr2[1]);

// Array Methods

// myArr.push(7) // add element in array last
// myArr.pop() //  remove last element in array

// myArr.unshift() // add firt element in array
// myArr.shift() //   remove firt element in array

//array convert in boolean
// const type = (myArr.includes(5))
// console.log(typeof type) 

// console.log(myArr.indexOf(2))

const newArry = myArr.join() // conver array in string also change datatype into string
// console.log(myArr);
// console.log(newArry);

// console.log(typeof(newArry));
// console.log(myArr)


// Slice And  Splice 

const myArray= [1,2,3,4,5,6]
const myn1 = myArray.slice(1,3)
// console.log(myn1);
// console.log(myArray); // slice is not change origanal array

//splice 

const myn2 = myArray.splice(1,3)
// console.log(myn2);
// console.log(myn2) // splice is change orignal array 

