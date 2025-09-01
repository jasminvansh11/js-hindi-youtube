const accountId = 12345;
let accountEmail  = "Jasmin@gmail.com";
var accountPass= "jasmin2025@";
accountCity = "Gir";
let accountstate;

//accountId = 2  //Not Allowed
accountEmail = "jv@jv.com"
accountPass = "Jasmin2006@"
city ="Ahmdabad"
console.log(accountId);

/*
Prefer Not to use var 
becuase of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPass,accountCity,accountstate])
