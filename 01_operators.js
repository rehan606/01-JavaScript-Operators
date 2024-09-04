
const product = {
    title:"Book",
    price:240,
    rating: 4,
    offer: 5,
};

console.log(product)
console.log(typeof product["price"])




// ====================Operators============================

/* 
Arithmetic Operatiors +, -, *, /,
Modulus %
Exponentiation ++
--Unary{
    increment
    decrement
}
*/

let a = 5;
let b = 2;

console.log(a + b )
console.log("a + b =", a + b )
console.log("a - b =", a - b )
console.log("a * b =", a * b )
console.log("a / b =", a / b )
console.log("a % b =", a % b )
console.log("a ** b =", a ** b )

// ====================Unary Operators============================

let c = 7;
let d = 2;


c = c + 1,
// (olternative Use a++, or a--,)
console.log( "c =", c )


// ====================Asignment Operators============================

let e = 7;
let f = 2;

e  += 4; //e = e + 4
console.log("e = ", e)


// ====================Comparison Operators============================

let g = 7;
let h = 4;

console.log("7 == 4", g == h) // False
console.log("7 != 4", g != h) // True




// ====================Logical Operators============================

/*
    and - &&
    Or - ||
    Not - !
*/

// ===== And && oparator

let x = 7;
let y = 4;

let cond1 = x > y; //True
let cond2 = x === 7; //True

console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 && cond2 ",x > y && x === 7)


// // ===== OR || oparator
console.log("cond1 || cond2", x < y || x === 5 )

// // ===== Not || oparator
console.log("!(7 < 4", !(x < y) )




