//let score = "33abc"
//let score = null
//let score = undefined
let score = true
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" -> 33
// "33abc" -> NaN
// null -> 0
//true -> 1 ; 0-> false
//undefined -> NaN

let isLoggedIn = "Hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 -> true ; 0-> false
//"" -> false
//"Hitesh" -> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

//**********Operations************

let value = 3
let negvalue = -value
console.log(negvalue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);
 
let str1 = "Hello"
let str2 = " World"

let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1" + 2 + 2);
console.log(1 + 2+ "2");
console.log(+true);
console.log(+"");

let game = 100
game++
console.log(game)
