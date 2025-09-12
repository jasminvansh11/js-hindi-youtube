const user = {

    username: "Jasmin",
    price: 999,

    wellcomeMassage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);

    }

}

// user.wellcomeMassage()
// user.username = "Vansh"
// user.wellcomeMassage()
// console.log(this);


// function chai(){
//     let username = "Jasmin"
//     console.log(this.username)
// }

// chai()

// const chai = function ()    {
//      let username = "Jasmin"
//      console.log(this.username)
// }

// chai()


// Arrow function
// const chai =  () => {
//     let username = "Jasmin"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1,num2) =>{
//       return num1 + num2
// }

// console.log(addTwo(5,6))/


// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) =>  num1 + num2
// console.log(addTwo(5,8));


const addTwo = (num1,num2) =>  ({username:"Jasmin"})

console.log(addTwo());
