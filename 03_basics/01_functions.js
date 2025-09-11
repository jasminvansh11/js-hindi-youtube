//Example of create function
function MyName() {
    console.log("J")
    console.log("a")
    console.log("s")
    console.log("m")
    console.log("i")
    console.log("n")
}

// MyName()

// Example 2

// function addTwoNumber(Number1,Number2){
//     console.log(Number1 + Number2);
// }

// addTwoNumber(2,8)

//Example 3
function addTwoNumber(Number1, Number2) {
    // let result = Number1 + Number2
    // return result;

    return Number1 + Number2
}

//Example 4
const result = addTwoNumber(2, 8)
// console.log("Result:", result);

function loginUserMassage(username) {

    if (!username) {
        console.log("Please enter a username");

    }

    else {
        return `${username} just logged in`
    }

}

// console.log(loginUserMassage())

//Example 5


function calculateCartPrice(val1, val2, ...num) {
    return num
}

// console.log(calculateCartPrice(200,500,700,1000));

const user = {
    username: "jasmin",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Jasmin Vansh",
    price: 399
})

//Exampele 6

const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(newArray));

console.log(returnSecondValue([200, 300, 400, 500]))
