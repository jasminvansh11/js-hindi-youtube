const myNums = [1,2,3]

const mytotal = myNums.reduce((acc, currvalue) =>{
    return acc + currvalue
},0)

console.log(mytotal)

const shoppingCart = [
    {
        itemname : "Svmsumg s24 ultra",
        price :    100000
    },

    {
        itemname : "iphone 16",
        price :     150000
    }
]

const totalBill = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(totalBill)

// Same but write in object return complusary in object
// const totalBill = shoppingCart.reduce((acc,item) => {
//     return acc + item.price
// },0)