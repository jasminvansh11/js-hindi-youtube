const user = {
    username :"jasmin",
    loginCount: 7,
    SignedIn: true,

    getUserDetails: function(){
        console.log("Got user detaile from database")
        console.log(`Username ${this.username}`);
        return this
        
    }
}


console.log(user.username)
console.log(user.getUserDetails());
console.log(this);

function User (username,loginCount,isLoggedIn){
    this.username = username;
    this.isLoggedIn = loginCount;
    this.isLoggedIn =isLoggedIn

     this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true) 
console.log(userOne)
const userTwo = new User("jasmin",11,false) // if not use new keyword overwrite value in userOne
console.log(userOne.constructor);
console.log(userTwo)