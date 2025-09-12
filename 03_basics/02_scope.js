var c = 300
let a = 400

if(true){
    let a  = 10;
    const b = 20;
    // console.log("Inner:",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


//In nested fuction child use parent property but parent not use child property
function one(){
    const username = "jasmin"

    function two(){
        const website = "Youtube"
        // console.log(username);
        
    }

    // console.log(website);

    two()
    
}

one()

if(true){
    const username = "Jasmin";
    if(username === "Jasmin"){
        const website = " Google"
        console.log(username + website);
    }
    // console.log(website)
}

// console.log(username)

/*            Intersting                            */

console.log(addOne(2));

function addOne(num){
     return num + 1
}

// console.log(addTwo(5))
const addTwo = function (num){
     return num + 1
}

