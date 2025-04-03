const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 //not allowed
accountEmail = "hc@gmail.com"
accountPassword = "2122121"
accountCity = "Bengaluru"
let accountState;
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
